class Employee{
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.annualSalary = 0;
    }
}
class PartTime extends Employee{
    constructor(name, age, hours, payRate){
        super(name, age);
        this.payRate = payRate;
        this.employeeType = "Part Time";
        this.hours = hours;
        this.annualSalary = this.calculatePay();
    }
    calculatePay(){
        return 10;
    }
}

class FullTime extends Employee{
    constructor(name, age, payRate){
        super(name, age);
        this.payRate = payRate;
        this.employeeType = "Full Time";
        this.annualSalary = this.calculatePay();
    }
    calculatePay(){
        return 20;
    }
}
class Main{
    constructor(){
        this.employees = [];
        this.displayEmployees();
        this.addEmployee("Kalani", 27, 40, 20);
        this.addEmployee("Brandon", 45, 25, 12);
        this.addEmployee("Pamela", 42, 15, 50);
    }
    showMenu(){

    }
    addEmployee(name,age,hours,payRate){
        if(hours<40){
            let partTime = new PartTime(name, age, hours, payRate);
            this.employees.push(partTime);
        }
        else{
            let fullTime = new FullTime(name, age, payRate);
            this.employees.push(fullTime);
        }
    }
    removeEmployee(){

    }
    editEmployee(){

    }
    displayEmployees(){
        console.log(this.employees)
    }
}
(()=>{
    const main = new Main();
})();