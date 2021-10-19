class Employee{
    constructor(name, age){
        this.name = name;
        this.age = age;
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
        return this.payRate*this.hours*52;
    }
}

class FullTime extends Employee{
    constructor(name, age, payRate){
        super(name, age);
        this.payRate = payRate;
        this.employeeType = "Full Time";
        this.hours = 40;
        this.annualSalary = this.calculatePay();
    }
    calculatePay(){
        return this.payRate*40*52-1000;
    }
}
class Main{
    constructor(){
        this.employees = [];
        this.addEmployee("Kalani", 27, 40, 20);
        this.addEmployee("Brandon", 45, 25, 12);
        this.addEmployee("Pamela", 42, 15, 50);
        this.displayEmployees();
        this.showMenu();
    }
    showMenu(){
            let userChoice = parseInt(prompt("Main Menu\n1. Add Employee\n2. Remove Employee\n3. Edit Employee\n4. Display Employees"));
            switch (userChoice) {
                case 1:
                    let userEmployee = prompt("Add employee name, age, hours/wk, pay rate [separate each by a comma]").split(",");
                    console.log(userEmployee);
                    this.addEmployee(userEmployee[0],userEmployee[1],userEmployee[2],userEmployee[3]);
                    this.showMenu();
                    break;
                case 2:
                    this.removeEmployee();
                    break;
                case 3:
                    this.editEmployee();
                    break;
                case 4:
                    this.displayEmployees();
                    this.showMenu();
                    break;
                default:
                    break;
            }
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
        let id = 1;
        console.log("My Employees");        
        console.log(`ID\tName\tSalary\thrs\tpay\tFT/PT`);
        this.employees.forEach(employee=>{
            console.log(`${id}\t${employee.name}\t${employee.annualSalary}\t${employee.hours}\t${employee.payRate}\t${employee.employeeType}`);
            id++;
        })
    }
}
(()=>{
    const main = new Main();
})();