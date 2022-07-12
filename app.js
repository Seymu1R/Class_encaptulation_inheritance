class Person{
    constructor(name,surname,age){
        
        this.name=name;
        this.surname=surname;
        this.age=age;
    }
    checkAge(){
        if (this.age<18) {
            console.log("qeydiyyat munkun deyil");
            
        }
        else{
            console.log("xos gelmisiniz");
        }
    }
}
var person1 =new Person("Xelilbey","Xelilbeyli",17);
seymur.checkAge();
class Student extends Person {
constructor(name,surname,age,groupname){
    this.groupname=groupname;
}
}
var stu1=new Student("seymur","manafov",25,'p324');
