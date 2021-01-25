var inquirer = require('inquirer');

var questions = [
    {
        type: "input",
        name: "manager",
        message: "What is the team manager's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your employee ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: function (email) {
  
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

            if (valid) {
                return true;
            } else {
                console.log("\n Please enter a valid email")
                return false;
            }
        }
    }

]
inquirer.prompt(questions).then((answers) => {
    console.log(answers.manager);
    console.log(answers.id);
    console.log(answers.email);
  });