

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
var seymur =new Person(
    "Seymur","Manafov",17
)
seymur.checkAge();
