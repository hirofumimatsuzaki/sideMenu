import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pageone',
  templateUrl: './pageone.page.html',
  styleUrls: ['./pageone.page.scss'],
})
export class PageonePage implements OnInit {
    task:string;
    tasks:{ name:string }[]=[

    ];

  constructor() { }
 

  ngOnInit() {
    
  }

  addTask(){
    this.tasks.push({
      name:this.task
    });
    this.task='';
  }

}
