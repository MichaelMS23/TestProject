import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  username!: string;
  password!: string;
  form!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router
  ) { 
    
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  get f() { return this.form.controls; }

  onSubmit() {

        if(this.username == "admin" && this.password == "123")
        {
          this.loading = true;
          this.login(this.username, this.password)
            .pipe(first())
            .subscribe({
                next: () => {
                    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
                    this.router.navigateByUrl(returnUrl);
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
        }
        else
        {
          return;
        }
        this.submitted = true;
    }

}
