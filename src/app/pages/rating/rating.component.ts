import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  rating:any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.listarRating();
  }

  listarRating(){
    this.http.get<any>(`${environment.api}/classificacao`).subscribe( res => {
      console.log(res)
      this.rating = res.classificacao
    })
  }

}
