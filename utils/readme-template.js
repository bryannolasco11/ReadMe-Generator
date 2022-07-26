
// This is how the readme will look
const generateMarkdown = (data) => {
 return `
 # ${data.title}

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

 `
 
 
};
 
   
    
      


    

module.exports = generateMarkdown;