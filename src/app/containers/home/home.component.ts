import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  count$: Observable<number>;

  constructor(private store : Store<{count : number}>) { 
    this.count$ = store.pipe(select('count'))
  }

 
  ngOnInit() {
  }

}
