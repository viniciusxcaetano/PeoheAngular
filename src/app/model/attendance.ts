import { TypeOfPayment, Status } from "./enum/Attendance";
import { Installment } from "./Installment";
import { ApplicationUser } from "./ApplicationUser";
import { Clinic } from "./Clinic";
import { Doctor } from "./Doctor";

export class Attendance {

    public constructor(init?: Partial<Attendance>) {
        Object.assign(this, init);
    }

    attendanceId?: string;
    name?: string;
    status?: Status;
    description?: string;
    typeOfPayment?: TypeOfPayment;
    amount?: number;
    amountPaid?: number;
    percentage?: number;
    cardFee?: number;
    installmentsAmount?: number;
    installmentsPaid?: number;
    createdDate?: Date;
    startDate?: Date;
    endDate?: Date;
    payday?: Date;
    deleted?: Date;
    installments?: Array<Installment>;
    clinic?: Clinic;
    doctor?: Doctor;
    applicationUser?: ApplicationUser;
}