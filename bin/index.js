#!/usr/bin/env node

const chalk = require('chalk')
const clear = require('clear')

//可以理解是画图案的  cli的图案
const figlet = require('figlet')
const files =  require('../lib/files')

//一个用户与命令行交互的工具    type：表示提问的类型
const inquirer = require('../lib/inquirer')
const download = require('../lib/github')

clear();
console.log(
    //展示QC-CLI 的字段
    chalk.yellow(
        figlet.textSync('QC-CLI',{horizontalLayout:'full'})
    )
);

if(files.directoryExists('.git')){
    console.log(chalk.red('Already a git repository!'));
	process.exit();
}

const run = async ()=>{
    const credentials = await inquirer.askGithubCredentials();
    if(credentials.type = 'pc react+typescript'){
        download(credentials.name)
		return false
    }
    console.log(chalk.yellow(	'敬请期待！'));
}

run()

