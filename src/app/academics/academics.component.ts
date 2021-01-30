import { Component, OnInit } from '@angular/core';
import {IsloserviceService} from '../isloservice.service'

@Component({
  selector: 'app-academics',
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.css']
})
export class AcademicsComponent implements OnInit {

  data:any = null;
  constructor(private httpService:IsloserviceService) { 
    this.data = httpService.getAcademics();

  }

  ngOnInit(): void {
  }

}
