const fs = require('fs');

fs.readFile('readMe.txt', 'utf8', function(err, data){
    console.log('inside reader');
    fs.writeFile('writeMe.txt', data +'!@#$%');
});
// console.log(rea dMe);

// fs.writeFileSync('writeMe.txt', readMe + '33');
