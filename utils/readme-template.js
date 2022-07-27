// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}
function renderLicenseBadge(license) {
    if(license !== 'none' && license == 'BSD') {
        return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]'
    } else if (license!== 'none' && license == 'MIT') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
    } else if (license!== 'none' && license == 'Mozilla' ) {
        return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]'
    } else {
        return '';
    }
};

function renderLicenseLink(license) {
    if(license !== 'none' && license == 'BSD') {
        return '[BSD](https://opensource.org/licenses/BSD-3-Clause)'
    } else if (license!== 'none' && license == 'MIT') {
        return '[MIT](https://opensource.org/licenses/MIT)'
    } else if (license!== 'none' && license == 'Mozilla' ) {
        return '[MPL 2.0](https://opensource.org/licenses/MPL-2.0)'
    } else {
        return '';
    }
}

function renderLicenseSection(license) {
    if(license === "none") {
        return "";
    } else {
        return `## License
        This project has a license under : ${license}
        `
    }
};

// This is how the readme will look
const generateMarkdown = (data) => {
 return `
 # ${data.title}

 ${renderLicenseSection(data.license)}
 ${renderLicenseBadge(data.license)}
 ${renderLicenseLink(data.license)}



 ## Description

 ${data.description}


 ## Installation

 ${data.installation}

 ## Usage

 ${data.usage}

 ## Contributions

 ${data.credits}

 ## Instructions for Tests
 ${data.tests}

 ## Questions

 If you have any additional questions, I can be reached at:
 
 ${data.email}
 
 https://github.com/${data.github}
 `
 
 
};
 
   
    
      


    

module.exports = generateMarkdown;