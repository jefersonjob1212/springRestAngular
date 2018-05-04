import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  isCollapsed = true;

  constructor(){}

  toogleMenu(){
    this.isCollapsed = !this.isCollapsed;
  }
}
