var ctl = require('./index');

ctl.bufferinfo().then(function (data) {
    console.log(data);
}).catch(function (err) {
    console.log(err);
});