import { createReducer } from "@ngrx/store";
import { Staff } from "../models/staff.model";

export class StaffState{
  staff!: Staff[];
  status!: 'loading' | 'success' | 'error';
}

export const initialState: StaffState = {
  staff: [],
  status: 'error'
}

export const staffReducer = createReducer(
  initialState
)
