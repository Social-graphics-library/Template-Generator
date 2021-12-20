const fs = require('fs');
const path = require('path');

const tmp = "./tmp/";
const root = "./";

// get version from package.json
const pkg = require('./../package.json');
const version = pkg.version;

function deleteFolderRecursive(path) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function (file) {
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

function install(dir) {
    const child = require('child_process').execSync('npm install', {
        cwd: dir,
        stdio: 'inherit'
    });
    child;
}

function deploy(dir) {
    const child = require('child_process').execSync('npm run deploy-files', {
        cwd: dir,
        stdio: 'inherit'
    });
    child;
}

const electronInstaller = require('electron-winstaller');

async function winInstaller() {
    try {
        await electronInstaller.createWindowsInstaller({
            appDirectory: './tmp/build/electron/sgl-template-generator-win32-x64/',
            title: 'SGLTemplateGenerator',
            name: 'SGLTemplateGenerator',
            outputDirectory: './tmp/build/installers/windows/',
            authors: 'Jonas Pfalzgraf',
            loadingGif: './static/assets/sgl.gif',
            version: version,
            iconUrl: 'https://raw.githubusercontent.com/Social-graphics-library/Template-Generator/main/static/assets/sgl.ico',
        });
        console.log('It worked!');
    } catch (e) {
        console.log(`No dice: ${e.message}`);
    }
} 

deleteFolderRecursive(tmp);
deleteFolderRecursive(root + "dist");
install(root);
deploy(root);
winInstaller(); 
