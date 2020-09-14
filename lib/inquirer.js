//一个用户与命令行交互的工具    type：表示提问的类型
const inquirer = require('inquirer');

const files = require('./files');

module.exports = {
    askGithubCredentials: () => {
        const questions = [
            {
                name: 'name',
                type: 'input',
                message: '请输入您的项目名',
                validate: function (value) {
                    if (value.length) {
                        return true;
                    } else {
                        return '请输入您的项目名';
                    }
                },
            },
            {
                name: 'type',
                type: 'list',
                message: '请选择项目类型',
                choices: ['pc react+typescript'],
            },
        ];
        return inquirer.prompt(questions);
    },
};
