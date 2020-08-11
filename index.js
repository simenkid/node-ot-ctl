const exec = require('child_process').exec;
const promisify = require('util').promisify;
const ctl = {};
const cmd_prefix = 'sudo ot-ctl ';

ctl.bufferinfo = function () {

    return new Promise(function (resolve, reject) {
        exec(cmd_prefix + 'bufferinfo', function (error, stdout, stderr) {
            if (error)
                reject(stderr);
            else
                resolve(stdout);
        });
    });
};


module.exports = ctl;
