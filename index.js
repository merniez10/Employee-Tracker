// inquirer to select options
const inquirer = require("inquirer");
// mysql2 node package equivalent of mysql queries
//dotenv

const mysql = require('mysql2');
require('dotenv').config()

// console.log(process.env.DB_USER)
// console.log(process.env.PASSWORD)
// console.log(process.env.DATABASE)

// Create the connection 
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});


function showAllJobsQuery() {
  // Simple query
  // Show all jobs
  connection.query(
    `SELECT title as job, salary, department.name FROM roles INNER JOIN department ON roles.department_id = department.id`,
    function(err, results, fields) { // fetch -> then
      if(err) console.error(err)
      console.table(results); // results contains rows returned by server
      //console.log("reached end")
      //process.exit()
      askFeature();
    }
  );
}
function showAllDepartmentsQuery() {
  // Simple query
  // Show all jobs
  connection.query(
    `SELECT * FROM department`,
    function(err, results, fields) { // fetch -> then
      if(err) console.error(err)
      console.table(results); // results contains rows returned by server
      askFeature();
    }
  );
}
function insertEmployeeQuery(FN, LN, RID, MID) {
  // Simple query
  // Show all jobs
  connection.query(
    `INSERT INTO employee(first_name,
      last_name,
      role_id,
      manager_id)
      VALUES 
      ("${FN}", "${LN}", ${RID}, ${MID})
    `,
    function(err, results, fields) { // fetch -> then
      if(err) console.error(err)
      //console.table(results); // results contains rows returned by server
      askFeature();
    }
  );
}

function askFeature() {
  inquirer.prompt([
    {
      name: "userFeature",
      type: "list",
      choices: [
        "Show all jobs",
        "Show all departments",
        "Add an employee",
        "Quit"
      ],
    }
  ]).then(answers=>{
    console.log(answers.userFeature)


    if(answers.userFeature==="Show all jobs") {
      showAllJobsQuery()
    }
    if(answers.userFeature==="Show all departments") {
      showAllDepartmentsQuery()
    }
    if(answers.userFeature==="Add an employee") {

      // prepare two awrrays of role names and manager names
      // after the role name selected, in your THEN, look for the index of that name in the array. 
      
      inquirer.prompt([
        {
          name:"first_name",
          type: "input",
          message: "Enter first name: "
        },
        {
          name:"last_name",
          type: "input",
          message: "Enter last name: "
        },
        {
          name:"role_id",
          type: "list",
          message: "Choose the new employee's role: ",
          choices: [
            1,
            2,
            3
          ]
        },
        {
          name:"manager_id",
          type: "list",
          message: "Choose the new employee's manager if s/he/them is not a manager: ",
          choices: [
            1,
            2,
            3
          ]
        },
        //
        //
      ]).then(answers=>{

        insertEmployeeQuery(answers.first_name, answers.last_name, answers.role_id,answers.manager_id)
      })
    }
  
    if(answers.userFeature==="Quit") {
      process.exit()
    }

  })
} // askFeature

askFeature()

// prompt.then

// USER STORY: HR director

// show all jobs
// show all departments
// fire people
// fire an entire department
// fire a specific role (fire all data analysts)