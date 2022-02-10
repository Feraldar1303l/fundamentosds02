import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  mensajes:any[]=[];

  constructor(private datosService:DataService) { }

  ngOnInit(){
    this.datosService.getPos().subscribe((posts: any[''])=>{
      this.mensajes=posts;
    } );
  }

}
