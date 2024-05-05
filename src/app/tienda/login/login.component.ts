import { Component, OnInit, inject, TemplateRef, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { User } from '../../interfaces/user';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  public userObj: User;
  private modalService = inject(NgbModal);
  public modal_info = {
    title: "",
    body: ""
  };

  constructor(private sessionService: SessionService) {
    this.userObj = {
      username: '',
      password: ''
    };
  }
  ngOnInit(): void {
  }

  login(content: TemplateRef<any>) {
    this.sessionService.login(this.userObj).subscribe((res) => {
      sessionStorage.setItem('token', res.access_token)
      console.log(res)
      this.modal_info.title = "Sesión iniciada";
      this.modal_info.body = "Bienvenido! " + this.userObj.username;
    });
    this.openSm(content);
  }

  openSm(content: TemplateRef<any>) {
    this.modalService.open(content, { size: 'sm' });
  }

}
