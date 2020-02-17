import { Attendance } from "./Attendance";

export class Installment {
    installmentId: string;
    amount: number;
    paid: boolean;
    installmentNumber: number;
    dueDate: Date;
    payDay: Date;
    deleted: Date;
    historic: string;
    attendance: Attendance;
}