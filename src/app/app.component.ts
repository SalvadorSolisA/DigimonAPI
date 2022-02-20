import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DigimonesServices } from "./components/digimones/digimones.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DigimonApi';

  digimones: any;

  constructor(public digimonService: DigimonesServices, private activatedRouter: ActivatedRoute){
    this.activatedRouter.params.subscribe(
      params =>{
        this.getDigimon();
      }
    )
  }

  nOnInit():void{
  }

  getDigimon(){
    this.digimonService.getDigimones().subscribe(
      res=>{
        this.digimones = res;
        console.log(res);
      },
      err=>{
        console.error(err);
      }
    );

  }


}
