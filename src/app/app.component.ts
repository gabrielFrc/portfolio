import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Portfolio';

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
    Aos.init();
  }
}
