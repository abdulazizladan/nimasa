import { createReducer, on } from "@ngrx/store";
import { Staff } from "../models/staff.model";
import { createStaff } from "./staff.actions";


export class RegistryState{
  staff!: Staff[];
  status!: 'loading' | 'success' | 'error';
}

export const initialState: RegistryState = {
  staff: [
    {
      basicInfo: {
        id: 2578,
        firstName: "Kamal",
        lastName: "Ibrahim Buba",
        dateOfBirth: new Date(22),
        grade: 13,
        stateOfOrigin: "Kaduna",
        gender: "male"
      },
      workInfo: {
        unit: '',
        rank: '',
        location: '',
        department: '',
        dateOfFirstAppointment: new Date(22),
        dateOfPresentAppointment: new Date(23),
        conferences: [],
        memberships: []

      }
    }
  ],
  status: 'loading'
}

export const RegistryReducer = createReducer(
  initialState,
  //on(createStaff, (state, newStaff) => ({
  //  ...state, staff: [...state.staff, newStaff]
  //}))
)
