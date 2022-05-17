import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.scss']
})
export class MarksComponent  {

  marks: any[] = [
    {
      "title": "Title1",
      "text": "test text text text text text ",
      "image": "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      "title": "Title2",
      "text": "test text text text text text ",
      "image": "https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      "title": "Title3",
      "text": "test text text text text text ",
      "image": "https://st.depositphotos.com/1787489/1338/i/600/depositphotos_13382862-stock-photo-thunderstorm.jpg"
    }
  ];

}
