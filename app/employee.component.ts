import {Component,OnInit} from '@angular/core';
import {EmployeeService} from './services/employee.service';

@Component({
    selector : 'employee-list',
    templateUrl:'./app/employee.component.html',
    providers:[EmployeeService]
})

export class  EmployeeListComponent implements OnInit{
    constructor(private employeeService:EmployeeService){
        
    }

    ngOnInit(){
        this.employees = this.employeeService.GetList();
    }

    public employees : any[];


}