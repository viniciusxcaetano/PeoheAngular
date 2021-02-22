import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Installment } from "../model/Installment";
import { RepositoryService } from "../shared/repository.service";

@Injectable()
export class InstallmentService {

    installmentList: Installment[] = [];

    constructor(private webService: RepositoryService, private http: HttpClient) { }

    createInstallment(entity: Installment): Observable<Installment> {
        const route = 'Installment/CreateInstallment';
        return this.webService.create(route, entity);
    }
}