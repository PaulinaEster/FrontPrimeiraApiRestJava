import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Usuario } from 'src/assets/Usuario';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent implements OnInit {


  usuarios: Usuario[] = []

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe((users) => {
      this.usuarios = users
    })
  }
 

}
