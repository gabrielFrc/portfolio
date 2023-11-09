import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProjectModalService {
  id : Number;
  name : String;
  techs : String[] = [];
  role : String;
  description : String | null = null;
  image : String = "assets/DefaultWork.png";
  repository : String | null = null;
  live : String | null = null;
  constructor(id: Number, name : String, @Inject(String) techs : String[], role : String, description : String, image? : String, repository? : String | null, live? : String) {
    this.id = id;
    this.name = name;
    this.techs = techs;
    this.role = role;
    if(description)
      this.description = description;
    if(repository)
      this.repository = repository;
    if(live)
      this.live = live;
    if(image)
      this.image = image;
  }

  getValues(){
    return {id: this.id, name: this.name, techs: this.techs, role: this.role, image: this.image};
  }
}
