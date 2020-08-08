import { Attendance } from "./Attendance";
import { ClinicDoctor } from "./ClinicDoctor";
import { ApplicationUser } from "./ApplicationUser";

export class Clinic {

    public constructor(init?: Partial<Clinic>) {
        Object.assign(this, init);
    }

    clinicId?: string;
    name?: string;
    percentage?: number; 
    phone?: string;
    address?: string;
    comments?: string;
    clinicDoctors?: Array<ClinicDoctor>;
    attendances?: Array<Attendance>;
    deleted?: Date;
    user?: ApplicationUser;
}