import { Component, OnInit } from '@angular/core';
import { TestService } from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DatingApp-SPA';
  testDataDisplay: any;
  constructor(private test: TestService) { }
  ngOnInit(): void {
    //this.getDataTest();
  }
 
  // getDataTest() {
  //   this.test.getData().subscribe(x => {
  //     console.log(x);
      
  //     this.testDataDisplay = x.value;
  //   });
  // }
}
