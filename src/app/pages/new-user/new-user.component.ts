import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { timeInterval } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { Usuario } from 'src/assets/Usuario';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  user!: Usuario; 
  validForm: boolean = false;
  mesage: string = '';
  userEdit = { nome: "", login: "",  novaSenha: "", confirmSenha: "" };
  userMensageError = { nome: '', login: '',  novaSenha: '', confirmSenha: '' };

 
  constructor(private service: UserService) { }

  ngOnInit(): void { }

  onValidationForm(): boolean{
    this.userMensageError = { nome: '', login: '', novaSenha: '', confirmSenha: '' };
    if(!this.userEdit.nome || this.userEdit.nome.length < 3){
      this.userMensageError.nome = "Nome precisa ter mais que 3 letras";
      
    }if(!this.userEdit.login || this.userEdit.login.length < 3){
      this.userMensageError.login = "login precisa ter mais que 3 letras";
      
    } if(this.userEdit.novaSenha.length < 3){
      this.userMensageError.novaSenha = "A nova senha precisa ter mais que 3 letras";

    }if(this.userEdit.novaSenha != this.userEdit.confirmSenha && this.userEdit.novaSenha.length < 3){
      this.userMensageError.confirmSenha = "Este campo precisa ser igual ao da nova senha e não pode ser vazio";
      return false;
    }
    return true;
  }

  onSubmitEditUser(): void{
    if(!this.onValidationForm()){
      return;
    }

    
    this.service.createUser({ id: 0, nome: this.userEdit.nome, login: this.userEdit.login, senha: this.userEdit.novaSenha }).subscribe(us => {this.user = us; this.mesage = "Usuario " + this.user.login + " criado com sucesso!!";});
    console.log(this.user);
    this.userEdit = { nome: "", login: "", novaSenha: "", confirmSenha: "" };
  }

  onCancelEdit(): void{ 
    this.userEdit = { nome: "", login: "", novaSenha: "", confirmSenha: "" };
    
  }
}
