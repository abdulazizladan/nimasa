import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { RegistryState } from '../../store/staff.reducer';
import { createStaff } from '../../store/staff.actions';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.scss']
})
export class AddStaffComponent implements OnInit {

  newStaffForm!: FormGroup;
  membership!: FormGroup;

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
        unitOrDepartment: [''],
        location: [''],
        dateOfFirstAppointment: [0],
        dateOfPresentAppointment: [0],
      }),
      memberships: this.fb.array([])
    })
  }

  get membershipForms() {
    return this.newStaffForm.get('memberships') as FormArray;
  }

  addMembership() {
    const membership = this.fb.group({
      organizationName: [''],
      organizationAcronym: ['']
    });
    this.membershipForms.push(membership);
  }

  removeMembership(index: number) {
    this.membershipForms.removeAt(index);
  }

  ngOnInit() {
    this.initializeForm()
    this.membership = this.fb.group({
      organization: ['']
    })
  }

  constructor( private fb: FormBuilder, private store: Store<{staff: RegistryState}>) {

  }

  submit() {
    const newStaff = this.newStaffForm.value;
    this.store.dispatch(createStaff(newStaff))
  }

  states = [
    'Abia',
    'Adamawa',
    'Akwa Ibom',
    'Anambra',
    'Bauchi',
    'Bayelsa',
    'Benue',
    'Borno',
    'Cross River',
    'Delta',
    'Ebonyi',
    'Edo',
    'Ekiti',
    'Enugu',
    'Abuja',
    'Gombe',
    'Imo',
    'Jigawa',
    'Kaduna',
    'Kano',
    'Katsina',
    'Kebbi',
    'Kogi',
    'Kwara',
    'Lagos',
    'Nasarawa',
    'Niger',
    'Ogun',
    'Ondo',
    'Osun',
    'Oyo',
    'Plateau',
    'Rivers',
    'Sokoto',
    'Taraba',
    'Yobe',
    'Zamfara'
  ];

}
