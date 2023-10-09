import { Component, HostListener, OnInit } from '@angular/core';
import { ProjectModalService } from 'src/app/services/project-modal.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  projectArray : ProjectModalService[] = [];
  filteredProjectArray : ProjectModalService[] = [];

  HasProjects : Boolean = false;

  onCheckboxClick(event : Event){
    const checkbox = event.target as HTMLElement;

    if(checkbox.classList.contains("checkbox-clicked")){
      checkbox.classList.remove("checkbox-clicked");
    }else{
      checkbox.classList.add("checkbox-clicked");
    }

    let checkboxes = document.querySelectorAll(".checkbox-div");
    
    this.filteredProjectArray = [];
    checkboxes.forEach(element => {

      const localArray = this.projectArray.filter((value) => {
        return (element.classList.contains("checkbox-clicked") && value.role.toLowerCase() === element.id.toLowerCase());
      })

      this.filteredProjectArray.push(...localArray);
      this.HasProjects = this.filteredProjectArray.length <= 0
    });
  }

  checkIfHasCheckboxes(): Boolean{
    const checkboxes = document.querySelectorAll(".checkbox-clicked");

    return checkboxes.length <= 0;
  }

  checkIfHasProjects(): Boolean{
    const projects = document.querySelectorAll('.project');

    return projects.length > 0;
  }

  ngOnInit(): void {
    let id = 0;

    this.projectArray.push(new ProjectModalService(id, 'Slice & Spice', ['ReactJS', 'AOS', 'ReduxJS'], 'FrontEnd', "assets/Work1.png", 'https://github.com/gabrielFrc/PizzaWebReact', 'https://gabrielfrc.github.io/PizzaWebReact/'));
    id++;
    this.projectArray.push(new ProjectModalService(id, 'Portfolio', ['Angular', 'AOS'], 'FrontEnd', "assets/Work2.png", "https://github.com/gabrielFrc/portfolio", " "));
    id++;

    this.filteredProjectArray = this.projectArray;

    this.HasProjects = this.checkIfHasProjects();
  }
}
