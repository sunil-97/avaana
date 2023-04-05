import { Component } from '@angular/core';

export interface Card{
  image: string;
}

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.scss']
})
export class ViewPageComponent {
  cards : Card[] = [
    {image: 'assets/img_1.png'},
    {image: 'assets/img_2.png'},
    {image: 'assets/img_3.png'},
    {image: 'assets/img_4.png'},
    {image: 'assets/img_1.png'},
    {image: 'assets/img_2.png'},
    {image: 'assets/img_3.png'},
    {image: 'assets/img_4.png'},
  ]
}
