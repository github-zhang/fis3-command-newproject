var fs = require('fs');
var path = require('path');
var templatePath = "";

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
    
    //console.log(" filename : " + filename);

    if (!fs.existsSync(filename)) {
        if (filename.indexOf("map.json")!== -1) {
            //新建map.json文件
            fs.writeFile(filename, "__RESOURCE_MAP__", function(err){
                return false;
            });
        } else if (filename.indexOf("fis-conf")!== -1) {
            //新建fis-conf.js文件
            var location = (process.env.modulePath ? path.dirname(process.env.modulePath) : path.join(__dirname, '../')).split(path.sep).join("/");
            readfile(location + templatePath["fis-conf"] + filename,function(data){
                //fis.log.info(" css data : " + data);
                fs.writeFile(filename, data, function(err){
                    //console.log('ok!');
                    return false;
                });
            });
        } else if (filename.indexOf(".img")!== -1) {
            var location = (process.env.modulePath ? path.dirname(process.env.modulePath) : path.join(__dirname, '../')).split(path.sep).join("/");
            //fis.log.info( " location + templatePath.img : " + location + templatePath.img);
            fis.util.copy(location + templatePath.img, process.env.PWD+"/img/"+filename.split("*")[0],null,null,true,false);
        } else {
            var location = (process.env.modulePath ? path.dirname(process.env.modulePath) : path.join(__dirname, '../')).split(path.sep).join("/");
			var tempName = templatePath.css;
			var filetype = ""
            if (!fs.existsSync(filename)) {
            	
                if (filename.indexOf(".html")!== -1) {
                    //新建html文件
                    tempName = templatePath.html;
                    filetype = "html"
                } else if(filename.indexOf(".css")!== -1 || filename.indexOf(".less")!== -1
                        || filename.indexOf(".scss")!== -1 || filename.indexOf(".sass")!== -1) {
                	tempName = templatePath.css;
                	filetype = "css"
                } else if(filename.indexOf(".js")!== -1 ) {
                	tempName = templatePath.js;
                	filetype = "js"
                }
				
				fis.log.info("tempName : " + tempName + filename);
                fis.util.copy(location + tempName + filename, process.env.PWD+"/"+filetype+"/"+filename.split("*")[0],null,null,true,false);
            } else {
                fs.writeFile(filename, "", function(err) {
                    //console.log('ok!');
                    return false;
                });
            }
        }
    }
    return true; 
}

//读文件内容
function readfile(filename,callbackFunc){
    fs.readFile(filename,'utf-8',function(err,data){  
        if(err){  
            console.log(data);
            callbackFunc("");
        }else{
            callbackFunc(data);
        }
    });
}

function buildStructure(confPath){
    var conf = require(confPath);
    //fis.log.info(" conf data : " + conf.template);
    var basepath = conf.basepath;
    templatePath = conf.template;
    //
    for(var key in conf.dirStructure) {
        if("currentdir" === key){
            
        }else{
            mkdirsSync(basepath+key);
        }
        var arrFiles = conf.dirStructure[key];

        if(arrFiles){
            for(var i=0;i<arrFiles.length;i++){  
				if(!!basepath+arrFiles[i])
   					newFile(basepath+arrFiles[i]);
            }
        }
    }
}

module.exports = buildStructure;