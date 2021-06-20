import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProgressBarService } from 'src/app/shared/services/progress-bar.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private progressBar: ProgressBarService) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'),
      ]),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit(){
    this.progressBar.startLoading();
    this.authService.login(this.loginForm.value).subscribe(
      () => {
        this.router.navigateByUrl('/');
        this.progressBar.completeSuccessLoading('Đăng nhập thành công');
      },
      (err) => {
        console.log(err);
        this.progressBar.completeErrorLoading('Tài khoản hoặc mật khẩu không đúng');
      }
    )
  }

}
