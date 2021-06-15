import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModelService } from './model-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'OpenBankTestProj_Praveen';
  constructor
  (private router: Router,
    private modelService: ModelService){}
  ngOnInit(): void{
    this.router.navigate([''])
  }
}
