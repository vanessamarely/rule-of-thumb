import { Component, OnInit } from '@angular/core';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import sampleData from './data.json';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  likes: number = 0;
  dislikes: number = 0;
  characters: any = sampleData;

  constructor() {console.log(this.characters) }

  ngOnInit() {
  }

  voting(type: string){
    const total = this.likes + this.dislikes;
    if(type === 'up'){
      this.likes++;
      if(this.dislikes !== 0){
        this.dislikes--;
      }
    }else{
      this.dislikes++;
      if(this.likes !== 0){
        this.likes--;
      }
    }
    const likePerc = (this.likes/total)*100;
    const dislikePerc = (this.dislikes/ total)*100;
  }

}
