import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  messageErreur = '';
  email = '';
  pwd = '';
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    // vérifie si les credentials sont correct
    if (this.email === 'admin@admin.com' && this.pwd === "secret") {
      // Si ok on le redirigie vers la liste des cvs
      this.router.navigate(['cv']);
    } else {
      // Si ko j'affiche un message d'erreur
      this.messageErreur = 'Vos credentials sont erronées veuillez les vérifier et réessayer de nouveau';
    }
  }
}
