/**
 * Created by navnahn on 5/16/17.
 */

var gBaseDirPath = null;

module.exports = {
    init: function (baseDirPath) {
        gBaseDirPath = baseDirPath;
    },
    test1: function () {
        return gBaseDirPath;
    }
};