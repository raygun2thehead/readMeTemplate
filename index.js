var fs = require('fs');
var inquirer = require("inquirer");

inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Title of project:"
    },
  ]).then(function(data) {
    let title = data.title;
    fs.writeFile("readme.md", `# ${title}`, function(err) {
  
      if (err) {
        return console.log(err);
      }  
    });
  });