import { Component, HostBinding, OnInit } from '@angular/core';
import { ModelService } from 'src/app/model-service';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  constructor(
    private modelService: ModelService
  ) { }

  ngOnInit(): void {
  }
  tChange(){
    this.modelService.themeChange()
  }
}
