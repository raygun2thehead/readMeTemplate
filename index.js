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
        message: "How to install project:"
    },
    {
        type: "input",
        name: "usage",
        message: "How to use project:"
    },
    {
        type: "list",
        message: "Which license are you using?",
        name: "license",
        choices: [
            "MIT",
            "Mozilla",
            "WTFPL"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Contributing:"
    },
    {
        type: "input",
        name: "test",
        message: "Project Test:"
    },
    {
        type: "input",
        name: "github",
        message: "Github Name:"
    },
    {
        type: "input",
        name: "email",
        message: "Email Address:"
    },
])
    .then(function (data) {
        const title = data.title;
        const description = data.description;
        const installation = data.installation;
        const usage = data.usage;
        const contributing = data.contributing;
        const test = data.test;
        const license = data.license;
        const github = data.github;
        const email = data.email;
        fs.writeFile("newreadme.md", `# ${title} \n\n`, function (err) {
            if (err) {
                return console.log(err);
            }
        });
        fs.appendFile("newreadme.md", `## Description \n ${description} \n`, function (err) {
            if (err) {
                return console.log(err);
            }
            fs.appendFile("newreadme.md", `## Table of contents \n - [Installation](#installation) \n - [Usage](#usage) \n - [contributing](#contributing) \n - [Tests](#tests) \n`, function (err) {
                if (err) {
                    return console.log(err);
                }
                fs.appendFile("newreadme.md", `## Installation \n ${installation} \n`, function (err) {
                    if (err) {
                        return console.log(err);
                    }
                    fs.appendFile("newreadme.md", `## Usage \n ${usage} \n`, function (err) {
                        if (err) {
                            return console.log(err);
                        }


                        if (license === "MIT") {
                            fs.appendFile("newreadme.md", `## License \n[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) \n`, function (err) {
                                if (err) {
                                    return console.log(err);
                                }
                            })
                        } if (license === "Mozilla") {
                            fs.appendFile("newreadme.md", `## License \n[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0) \n`, function (err) {
                                if (err) {
                                    return console.log(err);
                                }
                            })
                        } if (license === "WTFPL") {
                            fs.appendFile("newreadme.md", `## License \n[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/) \n`, function (err) {
                                if (err) {
                                    return console.log(err);
                                }
                            })
                        }
                        fs.appendFile("newreadme.md", `## Contributing \n ${contributing} \n`, function (err) {
                            if (err) {
                                return console.log(err);
                            }
                            fs.appendFile("newreadme.md", `## Test \n ${test} \n`, function (err) {
                                if (err) {
                                    return console.log(err);
                                }
                                fs.appendFile("newreadme.md", `## Questions \n - [Github](https://github.com/${github}) \n - [Email](mailto:${email})`, function (err) {
                                    if (err) {
                                        return console.log(err);
                                    }
                                });
                            });
                        });

                    });
                });
            });
        });

    });
