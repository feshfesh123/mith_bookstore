import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProgressBarService } from 'src/app/shared/services/progress-bar.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private progressBar: ProgressBarService) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'),
      ]),
      displayName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit(){
    this.progressBar.startLoading();
    this.authService.register(this.registerForm.value).subscribe(
      () => {
        this.router.navigateByUrl('/login');
        this.progressBar.completeSuccessLoading('Đăng ký thành công');
      },
      (err) => {
        this.progressBar.completeErrorLoading(err.error.errors[0]);
      }
    )
  }
}
