import { Component, OnInit } from '@angular/core';
import { AddStaffComponent } from '../add-staff/add-staff.component';
import { Staff } from '../../models/staff.model';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { RegistryState } from '../../store/staff.reducer';
import { Store } from '@ngrx/store';
import { loadStaff } from '../../store/staff.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit{

  registry$!: Observable<RegistryState>;

  displayedColumns: Array<string> = ['id', 'firstName', 'lastName', 'gender', 'grade', 'stateOfOrigin']

  constructor(
    private dialog: MatDialog,
    private store: Store<{registry: RegistryState}>) {
      this.registry$ = this.store.select((staff) => staff.registry)
  }

  ngOnInit() {

    this.store.dispatch(loadStaff());
  }

  openDialog() {
    this.dialog.open(AddStaffComponent)
  }
}
