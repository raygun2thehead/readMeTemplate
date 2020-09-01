var fs = require('fs');
var inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "Title of project:"
    },
    {
        type: "input",
        name: "description",
        message: "Description of project:"
    },
    {
        type: "input",
        name: "installation",
        message: "Title of project:"
    },
    {
        type: "input",
        name: "usage",
        message: "Title of project:"
    },
    {
        type: "input",
        name: "contributors",
        message: "Title of project:"
    },
    {
        type: "input",
        name: "test",
        message: "Title of project:"
    },
])
.then(function (data) {
    const title = data.title;
    const description = data.description;
    const installation = data.installation;
    const usage = data.usage;
    const contributors = data.contributors
    const test = data.test
    fs.writeFile("readme.md", `# ${title} \n\n`, function (err) {
        if (err) {
            return console.log(err);
        }
    });
    fs.appendFile("readme.md", `## Description \n ${description}`, function (err) {
        if (err) {
            return console.log(err);
        }
    });
    //insert table of contents
    fs.appendFile("readme.md", `## Installation \n ${installation}`, function (err) {
        if (err) {
            return console.log(err);
        }
    });
    fs.appendFile("readme.md", `## Usage \n ${usage}`, function (err) {
        if (err) {
            return console.log(err);
        }
    });
    fs.appendFile("readme.md", `## Contributors \n ${contributors}`, function (err) {
        if (err) {
            return console.log(err);
        }
    });
    fs.appendFile("readme.md", `## Test \n ${test}`, function (err) {
        if (err) {
            return console.log(err);
        }
    });
});
