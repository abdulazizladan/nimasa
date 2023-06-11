import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RegistryState } from './staff/store/staff.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nimasa';

  constructor( private store: Store<RegistryState>) {

  }

  ngOnInit() {

  }
}
