import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { isObservable } from 'rxjs';
import { Poster } from 'src/app/models/poster';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PosterService {
  form: FormGroup;
  url: string = environment.baseUrl + 'posters';
  posters : Poster[] = [];

  constructor(private http: HttpClient) {
    this.initializeForm();
  }

  initializeForm(){
    this.form = new FormGroup({
      id : new FormControl(0),
      imageUrl : new FormControl('', Validators.required)
    })
  }

  initializeEditForm(id: number){
    this.getPoster(id).subscribe((poster) => {
      this.form = new FormGroup({
        id : new FormControl(poster.id),
        imageUrl : new FormControl(poster.imageUrl, Validators.required)
      })
    });
  }

  createOrUpdatePoster(){
    if (this.form.value.id == 0) 
      return this.http.post(this.url, this.form.value);
    return this.http.post(this.url + '/' + this.form.value.id.toString(), this.form.value);
  }

  getPosters(){
    return this.http.get<Poster[]>(this.url).subscribe(
      (res) => {
        this.posters = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getPoster(id: number){
    return this.http.get<Poster>(this.url + '/' + id.toString());
  }

  deletePoster(id: number){
    return this.http.delete(this.url + '/' + id.toString());
  }
}
