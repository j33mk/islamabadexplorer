import { Component, OnInit } from '@angular/core';
import { IsloserviceService } from '../isloservice.service'

@Component({
  selector: 'app-parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.css']
})
export class ParksComponent implements OnInit {
  data:any = null;
  constructor(private httpService:IsloserviceService) { 
    this.data = httpService.getParks();

  }

  ngOnInit(): void {
  }

}
