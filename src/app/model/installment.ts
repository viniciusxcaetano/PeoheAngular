import { Attendance } from "./Attendance";

export class Installment {

    public constructor(init?: Partial<Installment>) {
        Object.assign(this, init);
    }

    installmentId?: string;
    amount?: number;
    paid?: boolean;
    installmentNumber?: number;
    dueDate?: Date;
    payDay?: Date;
    deleted?: Date;
    historic?: string;
    attendance?: Attendance;
    formattedInstallment?: string;
}