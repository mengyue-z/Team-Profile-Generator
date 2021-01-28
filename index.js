var inquirer = require('inquirer');
var fs = require('fs');
var Manager = require('./lib/Manager');
var Engineer = require('./lib/Engineer');
var Intern = require('./lib/Intern');
var render = require('./src/renderPage');
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const teamMembers = [];

function addManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "manager",
            message: "What is the team manager's name?",
            validate: answer => {
                if (answer !=="") {
                    return true;
                } else {
                    return "Please enter at least one character.";
                }
            }
        },
        {
            type: "input",
            name: "managerId",
            message: "What is Manager's employee ID?",
            validate: answer => {
                const pass= answer.match(
                    /^[1-9]\d*$/
                ); 
                if (pass) {
                    return true;
                } else {
                    return "Please enter a valid ID number greater than 0."
                }
            }
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is your email address?",
            validate: function (email) {
      
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    
                if (valid) {
                    return true;
                } else {
                    return "Please enter a valid email"
                }
            }
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is your office number?",
            validate: answer => {
                const pass= answer.match(
                    /^[1-9]\d*$/
                ); 
                if (pass) {
                    return true;
                } else {
                    return "Please enter a valid office number greater than 0."
                }
            },
        },
    ]).then((answers) => {
        const manager = new Manager(answers.manager,answers.managerId,answers.managerEmail, answers.managerOfficeNumber);
        console.log(manager);
        teamMembers.push(manager);
        addTeamMember();
      });
    };
addManager();
function addTeamMember() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'memberChoice',
            message: 'Do you want to add someone in your team?',
            choices: ['Engineer', 'Intern', 'finish building my team']
        }
    ]).then(choice => {
        switch (choice.memberChoice){
            case "Engineer":
                addEngineer();
            break;
            case "Intern":
                addIntern();
            break;
            default:
            console.log("Team profile completed!")
            var teamPage = render(teamMembers);
            fs.writeFileSync(outputPath, teamPage);
        }
    })

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineer",
            message: "What is the Engineer's name?",
            validate: answer => {
                if (answer !=="") {
                    return true;
                } else {
                    return "Please enter at least one character.";
                }
            }
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the Engineer's employee ID?",
            validate: answer => {
                const pass= answer.match(
                    /^[1-9]\d*$/
                ); 
                if (pass) {
                    return true;
                } else {
                    return "Please enter a valid ID number greater than 0."
                }
            }
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the Engineer's email address?",
            validate: function (email) {
      
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    
                if (valid) {
                    return true;
                } else {
                    return "Please enter a valid email"
                }
            }
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is the Engineer's Github username?",
            validate: answer => {
                if (answer !=="") {
                    return true;
                } else {
                    return "Please enter at least one character.";
                }
            }
        },
    
    ]).then(answers => {
        const engineer = new Engineer(answers.engineer,answers.engineerId,answers.engineerEmail, answers.engineerGithub);
        console.log(engineer);
        teamMembers.push(engineer);
        addTeamMember();
    });
};


function addIntern(){
    inquirer.prompt([
        {
            type: "input",
            name: "intern",
            message: "What is the Intern's name?",
            validate: answer => {
                if (answer !=="") {
                    return true;
                } else {
                    return "Please enter at least one character.";
                }
            }
        },
        {
            type: "input",
            name: "internId",
            message: "What is the Intern's employee ID?",
            validate: answer => {
                const pass= answer.match(
                    /^[1-9]\d*$/
                ); 
                if (pass) {
                    return true;
                } else {
                    return "Please enter a valid ID number greater than 0."
                }
            }
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the Intern's email address?",
            validate: function (email) {
      
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    
                if (valid) {
                    return true;
                } else {
                    return "Please enter a valid email"
                }
            }
        },
        {
            type: "input",
            name: "school",
            message: "What is the Intern's school?",
            validate: answer => {
                if (answer !=="") {
                    return true;
                } else {
                    return "Please enter at least one character.";
                }
            }
        },
    ]).then(answers => {
        const intern = new Intern(answers.intern, answers.internId, answers.internEmail, answers.school);
        console.log(intern);
        teamMembers.push(intern);
        addTeamMember();
    })
} 

};

