import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Anuglar Curd Application...!"
  employees = [
    {name:"Sikandar", position:"UI Developer"},
    {name:"Srikanth", position:"Java Developer"},
    {name:"Aandar", position:"Angular Developer"}
  ];

  model: any={};
  model2: any={};
  msg: any = ""; 
  addEmployee(){
    this.employees.push(this.model);
    this.model = {};
    this.msg = " Record is Successfully added..."
  }
  deleteEmployee(i){
    this.employees.splice(i,1)
    console.log(i);
    this.msg = " Record is Successfully deleted..."
  }
  myValue;
  editEmployee(k){
    this.model2.name= this.employees[k].name;
    this.model2.position = this.employees[k].position;
    this.myValue = k ;
  }
  updateEmployee() {
    let k=this.myValue;
    for(let i=0; i<this.employees.length; i++) {
      if(i==k) {
        this.employees[i]= this.model2;
        this.model2 = {};
        this.msg = " Record is Successfully updated..."
      }
    }
  }
  clickMe(){
    this.msg ="";
  }
}
