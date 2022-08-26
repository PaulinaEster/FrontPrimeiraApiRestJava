import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsuariosComponent } from './components/list-usuarios/list-usuarios.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { UsuarioDetailComponent } from './pages/usuario-detail/usuario-detail.component';

const routes: Routes = [
  { path: 'usuarios', component: ListUsuariosComponent },
  { path: 'usuarios/:id', component: UsuarioDetailComponent },
  { path: 'usuarios/create', component: NewUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
