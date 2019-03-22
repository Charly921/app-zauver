import { Component } from '@angular/core';
import 'fecha';
import fechaObj from 'fecha';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fecha: string;

  ngOnInit(){
    this.fecha = fechaObj.format(new Date(),'D [de] MMMM [de] YYYY');
  }
}
