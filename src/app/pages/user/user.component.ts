import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  mensajes:any[]=[];

  constructor(private datosService:DataService) { }

  ngOnInit(){
    this.datosService.getUser().subscribe((posts: any[''])=>{
      this.mensajes=posts;
    } );
  }
  }
