const testFolder = './img/';
const fs = require('fs');
const somefile = 'index.html';

function getSome(testFolder) {
    var a = [];
    fs.readdir(testFolder, (err, files) => {
        var res = files;
        res.forEach(file => {
            a.push(file);
            replaceSome(a.pop());
        });
    });
}

function replaceSome(popped) {
    fs.readFile(somefile, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        var result = data.replace(/toReplace/g, './img/' + popped);

        fs.writeFile('index' + popped + '.html', result, 'utf8', function (err) {
            if (err) return console.log(err);
        });
    });
}

getSome(testFolder);


