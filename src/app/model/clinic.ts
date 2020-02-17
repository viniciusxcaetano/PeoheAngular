import { Attendance } from "./Attendance";
import { ClinicDoctor } from "./ClinicDoctor";
import { ApplicationUser } from "./ApplicationUser";

export class Clinic{
    clinidId: string;
    name: string;
    percentage: number;
    clinicDoctors: Array<ClinicDoctor>;
    attendances: Array<Attendance>;
    deleted: Date;
    user: ApplicationUser;
}