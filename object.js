const Person = {
    firstName:'Ernest',
    lastName: 'Isibor',
    age: 10,
    skinColor: 'fair',
    country: 'Nigeria',
    walk: function(){
        console.log('I am walking in power');
    }
}


// console.log(Person.reproduce = 'twin');
// console.log(Person);
delete Person.skinColor;
console.log(Person);