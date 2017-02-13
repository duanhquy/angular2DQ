import {Injectable} from '@angular/core';

@Injectable()
export class EmployeeService {
    GetList(): any[] {
        let arrEmp: any[] = [
            { Id: 1, Name: "Nguyen van Hai" },
            { Id: 2, Name: "Nguyen van B" },
            { Id: 3, Name: "Nguyen van CHai" }           
        ]
        return arrEmp;
    }
}