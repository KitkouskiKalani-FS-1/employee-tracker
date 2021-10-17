class Employee{
    constructor(){
        this.name = "";
        this.age = 0;
        this.annualSalary = 0;
    }
}
class PartTime extends Employee{
    constructor(){
        super();
        this.payRate = 0;
        this.employeeType = "";
        this.hours = 0;
    }
    calculatePay(){

    }
}

class FullTime extends Employee{
    constructor(){
        super();
        this.payRate = 0;
        this.employeeType = "";
    }
    calculatePay(){

    }
}
class Main{
    constructor(){

    }
}
(()=>{
    const main = new Main();
})();