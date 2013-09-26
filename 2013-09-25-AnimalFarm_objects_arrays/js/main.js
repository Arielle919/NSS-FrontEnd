var dogs = [];
var name = prompt("Enter a dog's name or blank to exit:?");

while(name)
{
  var dog = {};
  dog.name = name;
  dog.age = parseInt(prompt('Age ?')); //read from inside outside
  dog.breed = prompt("Breed ?");
  dogs.push(dog); //push dog properties in array of dogs
  name = prompt("What is the dog's name");
}

// debugger;

var avg_age;
var sum_age = 0;

for(var i = 0; i < dogs.length; i++)  //i ++ is what counts through the array
  sum_age += dogs[i].age; // this is an array...[i] is dog then age

avg_age = sum_age / dogs.length;
console.log('You have ' + dogs.length + ' dogs, the avg age is ' + Math.ceil(avg_age));
document.write('You have ' + dogs.length + ' dogs, the avg age is ' + Math.ceil(avg_age));
