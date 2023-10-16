import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

interface Button{
  buttonName: String;
  elementId: String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'Portfolio';

  buttonsList : Button[] = [];

  showSubCategories = false;

  setSubCategories(){
    this.showSubCategories = !this.showSubCategories;
  }

  scrollToElement(element : String){
    const e = document.querySelector(`#${element}`)
    if(e)
      e.scrollIntoView({behavior: 'smooth', block: 'center'})
  }

  ngOnInit(): void {
    document.getElementById("submit-email")?.addEventListener("click", function(event){
      event.preventDefault()
    });

    Aos.init();

    this.buttonsList.push({buttonName: "Sobre mim", elementId: 'about-me'})
    this.buttonsList.push({buttonName: "Projetos", elementId: 'projects'})
    this.buttonsList.push({buttonName: "Habilidades", elementId: 'skills-container'})
    this.buttonsList.push({buttonName: "Contato", elementId: 'contact-info'})
  }
}
