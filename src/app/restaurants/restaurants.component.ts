import { Component, OnInit } from '@angular/core';
import {IsloserviceService} from '../isloservice.service'

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  data:any = null;
  constructor(private httpService:IsloserviceService) { 
    this.data = httpService.getRestuarunts();
  }
  ngOnInit(): void {
  }

}
