console.log('Hello world');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var res = notes.addNote();
console.log(res);

var addition = notes.add(9,6);
console.log(addition);

// var user = os.userInfo();
// console.log(user);
// fs.appendFile('greetings.txt', `Hello  ${user.username}! You are  ${notes.age }`);

