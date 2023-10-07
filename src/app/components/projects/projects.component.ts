import { Component, HostListener, OnInit } from '@angular/core';
import { ProjectModalService } from 'src/app/services/project-modal.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  openModal : Boolean = false;
  currentProject : ProjectModalService | null = null;
  onProjectClick(project : ProjectModalService){
    this.openModal = true;
    this.currentProject = project;
  }

  @HostListener('document:click', ['$event'])
  fecharModal(event: Event){
    const modal = document.querySelector('#project-modal');
    const project = document.querySelectorAll('.project');
    let stop = false;
    project.forEach((v) => {
      if(v.contains(event.target as Node)){
        stop = true;
        return;
      }
    })

    if(!stop && !modal?.contains(event?.target as Node)){
      this.openModal = false;
    }

    return;
  }

  projectArray : ProjectModalService[] = [];

  ngOnInit(): void {
    let id = 0;

    this.projectArray.push(new ProjectModalService(id, 'Projexto X', ['Angular', 'NextJS', 'AOS', 'Node', 'TailWindCSS', "ExpressJS", "Supabase", "MySQL", "MongoDB"], 'FrontEnd'));
    id++;
    this.projectArray.push(new ProjectModalService(id, 'Projexto Y', ['React'], 'FullStack'));
    id++;
    this.projectArray.push(new ProjectModalService(id, 'Projexto ABC', ['React'], 'FullStack'));
    id++;
    this.projectArray.push(new ProjectModalService(id, 'Projexto XYZ', ['React'], 'BackEnd'));
    id++;
    this.projectArray.push(new ProjectModalService(id, 'Projexto BackBack', ['React'], 'BackEnd'));
    id++;
  }
}
