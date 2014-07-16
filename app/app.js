/*********************
 * ANIMAL SHELTER    *
 *********************/
'use strict';

var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');

//MY CODE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var dogs = [];
var cats = [];
var birds = [];
var people = [];
var person1 = {name:'sally', age:'11', pets: []};
var person2 = {name:'tammy', age:'18', pets: []};
var person3 = {name:'jimmy', age:'12', pets: []};
people.push(person1, person2, person3);
var ask = prompt('(d)ogs, (c)ats, (b)irds, or (q)uit');

while(ask!=='q')
{
  switch(ask)
  {
    case 'd':
      dogFunc();
      break;
    case 'c':
      catFunc();
      break;
    case 'b':
      birdFunc();
      break;
  }
  ask = prompt('(d)ogs, (c)ats, (b)irds, or (q)uit');
}

ask = prompt('pick a person (s)ally, (t)ammy, (j)immy or (q)uit');
while(ask!=='q')
{
  for(var i=0; i<people.length; i++)
  {
    if(people[i].name[0]===ask)
    {
      var client = people[i];
      break;
    }
  }
  console.log('Client: ' + client);
  var animals;
  var choice = prompt('What type of pet? (d)og, (c)at, (b)ird');
  switch(choice)
  {
    case 'd':
      console.log('dogs: ', dogs);
      animals = dogs;
      break;

    case'c':
      console.log('cats: ', cats);
      animals = cats;
      break;

    case 'b':
      console.log('birds: ', birds);
      animals = birds;
      break;
  }
  var name = prompt('What is the name of the animal you wanna adopt? ');

  for(i=0; i<animals.length; i++)
  {
    if(name===animals[i].name)
    {
      var animal = animals[i];
      var index = i;
      break;
    }
  }
  console.log('Animal: ', animal);
  animals.splice(index, 1);
  client.pets.push(animal);
  console.log('after adoption: ', client);
  console.log('animals array: ', animals);
  ask = prompt('pick a person (s)ally, (t)ammy, (j)immy or (q)uit');
}

function dogFunc()
{
  var name = prompt('Dog name: ');
  var age = prompt('Dog\'s age: ');
  var breed = prompt('Dog breed : ');

  var dog = {name:name, age:age, breed:breed};
  dogs.push(dog);
}

function catFunc()
{
  var name = prompt('Cat name: ');
  var sex = prompt('Cat gender: ');
  var color = prompt('Color of the cat: ');

  var cat = {name:name, sex:sex, color:color};
  cats.push(cat);
}

function birdFunc()
{
  var name = prompt('Bird name: ');
  var type = prompt('What type of bird is it? ');
  var loud = prompt('How loud is this bird? ');

  var bird = {name:name, type:type, loud:loud};
  birds.push(bird);
}
console.log(chalk.blue.bgRed.bold('The following are dogs: '));
console.log(dogs);
console.log(chalk.red.bgBlue.bold('The following are cats: '));
console.log(cats);
console.log(chalk.green.bgCyan.bold('The following are birds: '));
console.log(birds);
