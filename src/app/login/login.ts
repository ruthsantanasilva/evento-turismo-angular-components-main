import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Router, RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ChangeDetectionStrategy, signal } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

interface Usuario {
  name: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,
    NgOptimizedImage,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})

export class Login implements OnInit {

  modo: 'login' | 'cadastro' = 'login';

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dialogRef: MatDialogRef<Login>
  ) { }

  ngOnInit(): void {
    this.setupForm();
  }

  setupForm(): void {
    this.form = this.fb.group({
      name: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  toggleMode(): void {
    this.modo = this.modo === 'login' ? 'cadastro' : 'login';
  }

  getUsuarios(): Usuario[] {
    const dados = localStorage.getItem('usuarios');
    return dados ? JSON.parse(dados) : [];
  }

  salvarUsuarios(lista: Usuario[]): void {
    localStorage.setItem('usuarios', JSON.stringify(lista));
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { name, email, password } = this.form.value;
    const usuarios = this.getUsuarios();

    if (this.modo === 'login') {

      const usuario = usuarios.find(
        u => u.email === email && u.password === password
      );

      if (!usuario) {

        this.form.get('email')?.markAsTouched();
        this.form.get('password')?.markAsTouched();
        this.form.updateValueAndValidity();

        this.form.get('email')?.setErrors({
          ...(this.form.get('email')?.errors || {}),
          invalidLogin: true
        });

        return;
      }

      localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
      
      this.dialogRef.close();

      this.router.navigate(['/']);
    }

    // ✅ CADASTRO
    else {

      const usuarioJaExiste = usuarios.some(u => u.email === email);

      if (usuarioJaExiste) {
        this.form.get('email')?.setErrors({
          ...(this.form.get('email')?.errors || {}),
          emailExistente: true
        });
        return;
      }

      const novoUsuario = { name, email, password };
      usuarios.push(novoUsuario);
      this.salvarUsuarios(usuarios);

      this.form.reset();
      this.modo = 'login';
    }
  }
}