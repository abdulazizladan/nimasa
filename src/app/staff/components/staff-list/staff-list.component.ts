import { Component, OnInit } from '@angular/core';
import { AddStaffComponent } from '../add-staff/add-staff.component';
import { Staff } from '../../models/staff.model';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { StaffState } from '../../store/staff.reducer';
import { Store } from '@ngrx/store';
import { loadStaff } from '../../store/staff.actions';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit{

  constructor( private dialog: MatDialog, private store: Store<StaffState>) {

  }

  ngOnInit() {
    this.store.dispatch(loadStaff())
  }

  openDialog() {
    this.dialog.open(AddStaffComponent)
  }
}
