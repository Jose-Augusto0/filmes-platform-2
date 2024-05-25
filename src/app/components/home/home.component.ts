import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  movies!:any[]

  generos:string[] = ['Ação', 'Romance', 'Aventura', 'Terror', 'Ficção cientifica', 'Comédia', 'Drama']

  constructor(private service: SharedService){}


  ngOnInit(): void {
    this.getMovie()
  }
  getMovie(){
    this.service.getMovie().subscribe(res => this.movies= res)
  }

}
