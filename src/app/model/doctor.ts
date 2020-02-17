import { Attendance } from "./Attendance";
import { ClinicDoctor } from "./ClinicDoctor";
import { ApplicationUser } from "./ApplicationUser";

export class Doctor {
    doctorId: string;
    name: string;
    cpf: number;
    professionalRegistration: number;
    phoneNumber: number;
    attendances: Array<Attendance>;
    clinicDoctors: Array<ClinicDoctor>;
    deleted: Date;
    user: ApplicationUser;
}