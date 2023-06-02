import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.scss']
})
export class AddStaffComponent implements OnInit {

  newStaffForm!: FormGroup;

  initializeForm() {
    this.newStaffForm = this.fb.group({
      basicInfo: this.fb.group({
        id: [''],
        email: ['', Validators.email],
        firstName: [''],
        lastName: [''],
        dateOfBirth: [null],
        gender: [''],
        stateOfOrigin: ['']
      }),
      workInfo: this.fb.group({
        gradeLevel: [0],
        rank: [''],
        department: [''],
        unit: [''],
        location: [''],
        dateOfFirstAppointment: [0],
        dateOfPresentAppointment: [0],
      }),
      memberships: this.fb.array([

      ])
    })
  }

  ngOnInit() {
    this.initializeForm()
  }

  constructor( private fb: FormBuilder) {

  }

}
