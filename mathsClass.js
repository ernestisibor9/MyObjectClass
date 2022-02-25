class People{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    get Name (){
        return this.name;
    }
    get Age (){
        return this.age
    }
    set Name (name){
        this.name = name
    }

}

let person = new People ('John Bosco', 70);
    console.log(person.Name);
    console.log(person.Age);
    person.Name = 'Mary'
    console.log(person.Name);
