import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { 
  AuthGuardService as AuthGuard 
} from './auth-guard.service';
import { EligiblityHomeComponent } from './eligiblity-home/eligiblity-home.component'
const routes: Routes = [
  {path: '', component: EligiblityHomeComponent,},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
