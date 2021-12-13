const fs = require('fs');
const path = require('path');

const tmp = "./tmp/";
const root = "./";

function deleteFolderRecursive(path) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function (file, index) {
            var curPath = path + "/" + file;
            if (fs.lstatSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
}

// execute npm install
function install(dir) {
    const child = require('child_process').execSync('npm install', {
        cwd: dir,
        stdio: 'inherit'
    });
}

// execute npm run deploy
function deploy(dir) {
    const child = require('child_process').execSync('npm run deploy-files', {
        cwd: dir,
        stdio: 'inherit'
    });
}

deleteFolderRecursive(tmp);
deleteFolderRecursive(root + "dist");
install(root);
deploy(root);