import { TypeOfPayment } from "./enum/Attendance";
import { Installment } from "./Installment";
import { ApplicationUser } from "./ApplicationUser";
import { Clinic } from "./Clinic";
import { Doctor } from "./Doctor";

export class Attendance {
    attendanceId: string;
    typeOfPayment: TypeOfPayment;
    amount: number;
    amountPaid: number;
    percentage: number;
    cardFee: number;
    installmentsAmount: number;
    installmentsPaid: number;
    historic: string;
    paid: boolean;
    creationDate: Date;
    payday: Date;
    deleted: Date;
    installments: Array<Installment>;
    clinic: Clinic;
    doctor: Doctor;
    applicationUser: ApplicationUser;
}