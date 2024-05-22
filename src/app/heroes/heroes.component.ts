import { Component, OnInit } from '@angular/core';
import { File } from '../file';
@Component({
  // 셀렉터는 html에 표기 되는 명칭을 부여
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  storage='Minio';

file: File={
  filename: 'filename',
  filesize: 100
}


  constructor() { }

  ngOnInit(): void {
  }



}
