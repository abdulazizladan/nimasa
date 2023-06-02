import { createAction, props } from "@ngrx/store";
import { Staff } from "../models/staff.model";

export const loadStaff = createAction('[STAFF] Load Staff');
export const loadStaffSuccess = createAction('[STAFF] Load Staff Success');
export const loadStaffFailure = createAction('[STAFF] Load Staff Failure');
export const createStaff = createAction('[STAFF] Create Staff', props<Staff>);
export const createStaffSuccess = createAction('[STAFF] Create Staff Success');
export const createStaffFailure = createAction('STAFF] Create Staff Failure');
