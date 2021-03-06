import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {
	private feeds: Array<any>;
	private name:string;
	private video: any = {id: 'tJJdBTQqwQM'};
	private baseUrl:string = 'https://www.youtube.com/embed/';
	private url:any;

  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit() {
	  this.feeds = [
          {name: "@RichJay", id: 'tJJdBTQqwQM', tumbnail: 'cook-01.png'},
          {name: "@MelvinJamie", id: 'dvlEaUlTEsg', tumbnail: 'cook-02.png'},
          {name: "@AngelaJones", id: 'Mx1DxPwEz1w', tumbnail: 'cook-03.png'},
          {name: "@DougSmith", id: 'WtH3dBbEDIE', tumbnail: 'cook-04.png'}
	  ];

	  this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.video.id + "?autoplay=1" + "rel=0&showinfo=0&autoplay=1");
  }

  invite() {
	  debugger;
	  // TODO: do something;
  }

  selectVideo(videoId) {
	  this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + videoId + "?autoplay=1" + "rel=0&showinfo=0&autoplay=1");
  }
}
