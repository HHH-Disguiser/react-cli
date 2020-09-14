const fs = require('fs')
const path = require('path')

module.exports = {
    getCurrentDirectoryBase : ()=>{
        return path.basename(process.cwd());
    },

    directoryExists : (filePath)=>{
        try {
            //来判断是否是文件目录
            return fs.statSync(filePath).isDirectory();
        } catch (error) {
            return false
        }
    }
}