import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IsloserviceService {

  constructor(private http:HttpClient) { 

  }
  getParks(){
    return [
      {
        name:'F9 Park',
        image:'https://upload.wikimedia.org/wikipedia/commons/e/ef/Arcitecture_at_Fatimah_Jinnah_Park.JPG',
        description:'Fatima Jinnah Park, also known as Capital Park or F-9 Park, is a public recreational park that spans the whole of Sector F-9 of Islamabad, Pakistan. It is named after Mādar-e Millat Fatima Jinnah, the younger sister of the founder of Pakistan Muhammad Ali Jinnah.'
      },
      {
        name:'Lake View Park',
        image:'https://www.islamabadscene.com/wp-content/uploads/2014/11/Lake-view-Park-e1501083894541.jpg',
        description:'Lake View Park is a wildlife park, amusement park and adventure park located near Village Malpur Rawal Lake, on Murree Road in Islamabad, Capital Territory, Pakistan. It runs under the administration of Capital Development Authority. This park also contains Pakistans largest bird cage.'
      }
    ]
  }
  getRestuarunts(){
    return [
      {
        name:'Wild Rice Restaurant',
        image:'https://pkaviation.com/wp-content/uploads/2017/02/wild-rice2.jpg',
        description:'Serena Hotel, Islamabad, G-5, Islamabad, Islamabad Capital Territory'
      }
    ]
  }
  getAcademics(){
    return [
      {
        name:'Allama Iqbal Open University, Islamabad',
        image:'https://photo-cdn.urdupoint.com/media/2020/04/_3/730x425/pic_1587022046.jpg',
        description:'The Allama Iqbal Open University is a public university in Islamabad, Pakistan. The university is the worlds fourth largest institution of higher learning, with an annual enrollment of 1,121,038 students, the majority are women and course enrollment of 3,305,948.'
      }
    ]
  }
  getToDos(){
    let url = "https://jsonplaceholder.typicode.com/posts";
    return this.http.get(url);
  }
  getData(){
    return {
      name:'Jamal Hussain',
      age:30,
      id:1
    }
  }
}
