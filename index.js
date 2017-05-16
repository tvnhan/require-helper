/**
 * Created by navnahn on 5/16/17.
 */
"use strict";
var rFs = require("fs");

var gBaseDirPath = null;

module.exports = {
    init: function (baseDirPath) {
        gBaseDirPath = baseDirPath;
    },
    test1: function () {
        return gBaseDirPath;
    },
    test2: function () {
        return getFiles(gBaseDirPath);
    }
};

var getFiles = function (dir, fileList){
    fileList = fileList || [];

    var files = fs.readdirSync(dir);
    for(var i in files){
        if (!files.hasOwnProperty(i)) continue;
        var name = dir+'/'+files[i];
        if (fs.statSync(name).isDirectory()){
            getFiles(name, fileList);
        } else {
            fileList.push(name);
        }
    }
    return fileList;
};