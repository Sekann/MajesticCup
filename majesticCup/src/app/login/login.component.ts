import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {CredentialsService} from '../services/auth/credentials.service';
import {User} from '../services/interfaces/user';
import {TokenService} from '../services/auth/token.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;
  submitted = false;
  showPassword = false;
  loginError = false;

  constructor(private fb: FormBuilder, private router: Router, private credentialsService: CredentialsService, private tokenService: TokenService) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    this.submitted = true;
    this.credentialsService.login(this.loginForm.value as User).subscribe({
      next: (data) => {
        this.tokenService.savetokens(data.access_token);
        this.router.navigate(['/draft'])
      },
      error: (err) => {
        this.loginError = true;
        console.log(err);
      }
    })
    if (this.loginForm.invalid) return;

  }
}
