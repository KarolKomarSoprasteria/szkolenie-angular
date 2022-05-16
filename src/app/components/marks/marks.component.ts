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
      "text": "test text text text text text "
    },
    {
      "title": "Title2",
      "text": "test text text text text text "
    },
    {
      "title": "Title3",
      "text": "test text text text text text "
    }
  ];

}
