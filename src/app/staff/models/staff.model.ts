import { Conference } from "./conferences.model";
import { Membership } from "./membership.model";

export class Staff{
  "basicInfo": {
    "id": number;
    "firstName": string;
    "lastName": string;
    "dateOfBirth": Date;
    "grade": number;
    "stateOfOrigin": string;
    "gender": string;
  };
  "workInfo"!: {
    "rank": string;
  "department": string;
  "unit": string;
  "location": string;
  "dateOfFirstAppointment": Date;
  "dateOfPresentAppointment": Date;
  "memberships": null | Array<Membership>;
  "conferences": null | Array<Conference>
  }
}
