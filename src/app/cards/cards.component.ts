import { Component, OnInit, Input } from '@angular/core';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';

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
  data: any;
  voteText: string = "Vote now!!"; 
  constructor(private toastr: ToastrService) {
    
   }

  ngOnInit() {
    this.getInitialData();
  }

  showMessage(item) {
    console.log(item)
    if(item.likes !== 0 || item.dislikes !== 0){
      this.toastr.success('Thank you for voting!', 'Vote successfully!');
    }
    else{
      this.toastr.info('Click on Thumb Up/Down to vote', 'Please Vote!');
    }
  }

  getInitialData(){
    this.data = JSON.parse(localStorage.getItem('data'));
  }

  voting(type: string, item){
    const alldata = [...this.data];
    let likes = item.likes;
    let dislikes = item.dislikes;
    this.voteText = "Vote again!";
    if(type === 'up'){
      likes++;
      if(dislikes !== 0){
        dislikes--;
      }
    }else{
      dislikes++;
      if(likes !== 0){
        likes--;
      }
    }
    
    const total = likes + dislikes;
    const likePerc = (likes/total)*100;
    const dislikePerc = (dislikes/ total)*100;
    alldata.map( (element) => {
      if(element.id === item.id){
        element['likes'] = likes;
        element['dislikes'] = dislikes;
      }
    });
    localStorage.setItem('data', JSON.stringify(alldata)); 
    this.showMessage(item);
    
  }

}
