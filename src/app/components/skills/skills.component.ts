import { Component, OnInit } from '@angular/core';
import { SkillsModalService } from 'src/app/services/skills-modal.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  listOfSkills: SkillsModalService[] = [];
  domainSkills: SkillsModalService[] = [];
  noDomainSkills: SkillsModalService[] = [];
  ngOnInit(){
    //Domain Skills
    this.listOfSkills.push(new SkillsModalService("https://img.icons8.com/ios-glyphs/60/react.png", "React", true));
    this.listOfSkills.push(new SkillsModalService("https://img.icons8.com/ios-filled/50/redux.png", "Redux", true));
    this.listOfSkills.push(new SkillsModalService("https://img.icons8.com/ios-filled/50/javascript.png", "JavaScript", true));
    this.listOfSkills.push(new SkillsModalService("https://img.icons8.com/ios-filled/50/typescript.png", "TypeScript", true));
    this.listOfSkills.push(new SkillsModalService("https://img.icons8.com/ios-filled/100/git.png", "Git", true));
    this.listOfSkills.push(new SkillsModalService("https://img.icons8.com/ios-filled/100/github.png", "GitHub", true));
    this.listOfSkills.push(new SkillsModalService("https://img.icons8.com/ios-filled/50/microsoft-teams-2019.png", "Microsoft Teams", true));
    this.listOfSkills.push(new SkillsModalService("https://img.icons8.com/external-tal-revivo-bold-tal-revivo/48/external-postman-is-the-only-complete-api-development-environment-logo-bold-tal-revivo.png", "Postman", true));
    this.listOfSkills.push(new SkillsModalService("https://img.icons8.com/ios-filled/100/trello.png", "Trello", true));
    this.listOfSkills.push(new SkillsModalService("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-plain.svg", "Figma", true));

    //No domain skills
    this.listOfSkills.push(new SkillsModalService("https://img.icons8.com/ios/100/java-coffee-cup-logo--v1.png", "Java", false));
    this.listOfSkills.push(new SkillsModalService("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-plain.svg", "Spring", false));
    this.listOfSkills.push(new SkillsModalService("https://img.icons8.com/ios-filled/50/angularjs.png", "Angular", false));
    this.listOfSkills.push(new SkillsModalService("https://img.icons8.com/ios-filled/100/c-sharp-logo.png", "CSharp", false));
    this.listOfSkills.push(new SkillsModalService("https://img.icons8.com/ios-filled/100/postgreesql.png", "PostgreSQL", false));

    this.domainSkills = this.listOfSkills.filter(v => {
      return v.betterDomain === true;
    })
    this.noDomainSkills = this.listOfSkills.filter(v => {
      return v.betterDomain === false;
    })
  }
}
