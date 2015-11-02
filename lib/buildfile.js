var fs = require('fs');
var path = require('path');

//创建多层文件夹 同步
function mkdirsSync(dirpath, mode) { 
    if (!fs.existsSync(dirpath)) {
        var pathtmp;
        dirpath.split(path.sep).forEach(function(dirname) {
            if (pathtmp) {
                pathtmp = path.join(pathtmp, dirname);
            }
            else {
                pathtmp = dirname;
            }
            if (!fs.existsSync(pathtmp)) {
                if (!fs.mkdirSync(pathtmp, mode)) {
                    return false;
                }
            }
        });
    }
    return true; 
}
//新建文件
function newFile(filename){
    
    if (!fs.existsSync(filename)) {
        //todo colse
        fs.writeFile(filename,'', function(err){
            //console.log('ok!');
            return false;
        });
    }
    return true; 
}

function buildStructure(confPath){
    var conf = require(confPath);
    var basepath = conf.basepath;
    for(var key in conf.dirStructure) {
        mkdirsSync(basepath+key);
        var arrFiles = conf.dirStructure[key];

        if(arrFiles){
            for(var i=0;i<arrFiles.length;i++){
                newFile(basepath+key+"/"+arrFiles[i]);
            }
        }
    }
}

module.exports = buildStructure;