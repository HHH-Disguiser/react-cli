//child_process是nodejs的一个子进程模块，可以用来创建一个子进程，可以直接在js中调用，shell命令去完成一些牛逼的操作
const exec = require('child_process').exec
// chalk 主要作用是用于cli的样式
const chalk = require('chalk');
const { stdout } = require('process');
// A simple spinner for node cli.  调整的工具
const Spinner = require('cli-spinner').Spinner


const gitUrl = 'https://github.com/HHH-Disguiser/react-ts-webpack'

const branch = 'dev';

function download (projectName){
  let cmdStr = `git clone ${gitUrl} ${projectName} && ${projectName} && git checkout ${branch}`
  const status = new Spinner('正在创建，请稍等.....')
  status.start();
  exec(cmdStr,(error,stdout,stderr)=>{
      if(error){
          console.log(error)
          process.exit();
      }
      status.stop();
      console.log(chalk.green('\n √ 创建完成!'))
      console.log(`\n cd ${projectName} && npm install \n`)
      process.exit()
  })
}


module.exports = download

