import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Usuario } from 'src/assets/Usuario';
import { Response } from 'src/assets/Response';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css']
})
export class UsuarioDetailComponent implements OnInit {
 
  user!: Usuario; 
  validForm: boolean = false;
  mesage: string = '';
  userEdit = { nome: "", login: '', senha: '', novaSenha: '', confirmSenha: '' };
  userMensageError = { nome: '', login: '', senha: '', novaSenha: '', confirmSenha: '' };


  onModalView: boolean = false;
  constructor(private service: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id")); 
    this.service.getUserById(id).subscribe((user: Usuario) => { this.user = user;});
  }

  onValidationForm(): boolean{
    this.userMensageError = { nome: '', login: '', senha: '', novaSenha: '', confirmSenha: '' };
    if(!this.userEdit.nome || this.userEdit.nome.length < 3){
      this.userMensageError.nome = "Nome precisa ter mais que 3 letras";
      return false;
    }if(!this.userEdit.login || this.userEdit.login.length < 3){
      this.userMensageError.login = "login precisa ter mais que 3 letras";
      return false;
    }if(this.userEdit.senha != this.user.senha){
      this.userMensageError.senha = "Insira a senha antiga corretamente para editar";
      return false;
    }if(this.userEdit.novaSenha.length < 3){
      this.userMensageError.novaSenha = "A nova senha precisa ter mais que 3 letras";
      return false;
    }if(this.userEdit.novaSenha != this.userEdit.confirmSenha){
      this.userMensageError.confirmSenha = "Este campo precisa ser igual ao da nova senha";
      return false;
    }
    return true;
  }

  onSubmitEditUser(): void{
    if(!this.onValidationForm()){
      return;
    }
    this.service.updateUser({ id: this.user.id, nome: this.userEdit.nome, login: this.userEdit.login, senha: this.userEdit.novaSenha }).subscribe(us => {this.user = us});
    this.onModalView = false;
    this.mesage = "Usuario " + this.user.login + " editado com sucesso!!";
  }

  onCancelEdit(): void{
    this.onModalView = false;
    this.userEdit = { nome: '', login: '', senha: '', novaSenha: '', confirmSenha: '' };
  }
 
}
