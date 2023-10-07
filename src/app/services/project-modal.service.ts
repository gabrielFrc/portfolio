import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProjectModalService {
  id : Number;
  name : String;
  techs : String[] = [];
  role : String;
  repository : String | null = null;
  live : String | null = null;
  constructor(id: Number, name : String, @Inject(String) techs : String[], role : String, repository? : String, live? : String) {
    this.id = id;
    this.name = name;
    this.techs = techs;
    this.role = role;
    if(repository)
      this.repository = repository;
    if(live)
      this.live = live;
  }

  getValues(){
    return {id: this.id, name: this.name, techs: this.techs, role: this.role};
  }
}
