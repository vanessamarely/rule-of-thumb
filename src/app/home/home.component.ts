import { Component, OnInit, Inject } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import sampleData from './data.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faTimes = faTimes;
  characters: any = sampleData;
  data: any = [];

  constructor() {
    localStorage.setItem('data', JSON.stringify(this.characters));
  }

  
  ngOnInit() {
  }

}
