var fs = require('fs');// allows you to read and write to a file
// input people people.json
//output [person1, person2, person3]
//example:
//var people = database.read('people.json')

exports.read =  function(filename){
  var data = fs.readFileSync(filename);
  data = JSON.parse(data);//converts to object
  return data;
};

// input people.json, data
//output nothing
//data.write('people.json', [p1, p2,p3])

exports.write = function(filename, data){
  data = JSON.stringify(data);
  fs.writeFileSync(filename, data);
};
