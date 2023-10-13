import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsModalService {

  link: String;
  alt: String;
  betterDomain: Boolean;
  constructor(link: String, alt: String, betterDomain: Boolean) {
    this.link = link;
    this.alt = alt;
    this.betterDomain = betterDomain;
  }
}
