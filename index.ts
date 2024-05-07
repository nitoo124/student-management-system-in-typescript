import inquirer from "inquirer";

import chalk from 'chalk';

const studentid : number = 10000 + Math.floor(Math.random() * 90000);
console.log(studentid)


let answers = await inquirer.prompt([
    {
        name : 'studentname',
        type : 'input',
        message : 'Entre Your Name Plz?',
        validate : (value)=>{
            if (value.trim()  === '') {

                console.log(chalk.red('Plz Entre a valid name'))
                
            } else {
                return true;
            }
        }
    },

    {
        name : 'courses',
        type : 'list',
        message : 'Select the Course Plz?',
        choices : ['Javascript', 'Html', 'CSS', 'Typescript', 'Python']
    },
    
]);

let coursefee : {[key : string] : number} = {

    'Javascript' : 3000,
    'Html' : 1000,
    'CSS' : 2000,
    'Typescript' : 3000,
    'Python'  : 5000
}

console.log(`Course fee : ${coursefee[answers.courses]}`)

let mybalance : number = 0;
console.log(chalk.bgBlue(` Your total Balance is : ${mybalance}`));


let paymentmethod = await inquirer.prompt([
    {
        name : 'paymenttype',
        type  : 'list',
        message : 'Select your payment method plz? ',
        choices : ['Bank transfer', 'Easypaisa', 'Jazzcash']
    },

    {
        name : 'amount',
        type : 'input',
        message : 'Entre your amount plz?',
        validate : (value)=>{
            if (value.trim() === '') {

                console.log(chalk.red('plz Entre valid amount'))
                
            } else {
                return true;
                
            }
        }
    }
])

console.log(chalk.bgGreen(`\nYou Selected Payment method ${paymentmethod.paymenttype}`));

const tutionfee =coursefee[answers.courses];
const payment_amount = parseFloat(paymentmethod.amount);

if (tutionfee === payment_amount) {

    console.log(chalk.green(`\nCongratulation, You have successfully enrolled in ${answers.courses}.\n`));

    let student_ans = await inquirer.prompt([
        {
            name : 'select',
            type : "list",
            message : 'What would you like to do next?',
            choices : ['viewStatus', 'Exist']
        }

    ])

        if (student_ans.select === 'viewStatus') {

            console.log(chalk.green('\n\n\t***********Student Information************\n\n\t'))

            console.log(chalk.yellow(`\n\t Student Id : ${studentid}\n\n\t Name : ${answers.studentname}\n\n\t Course : ${answers.courses}\n\n\t Fees Paid : ${payment_amount}`));

        }else{
            console.log(chalk.grey('Existing Student Management System'))
        }
    
}else{
    console.log(chalk.red('Invalid amount'));
}