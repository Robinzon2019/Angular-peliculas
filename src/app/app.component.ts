import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent  implements OnInit{
  
  title = 'angular-peliculas';
  
  peliculas: any;
 
  ngOnInit(): void {

    setTimeout(() => {
      this.peliculas = [
        {
          titulo: 'Spider-Man',
          fechaLanzamiento: new Date(),
          precio: 1400.99                                          
        },
        {
          titulo: 'Moana',
          fechaLanzamiento: new Date('2016-11-14'),
          precio: 300.99                                          
        }
      ];
    }, 1000);

  }
}