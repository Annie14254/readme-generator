// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var licenseBadge

  if(license){
    licenseBadge = `[![License Badge](https://img.shields.io/badge/License-${license}-green.svg)`
  }

  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    
    ${renderLicenseSection()}

    ## Description
    ${data.description}

    ## Installation
    To install the dependencies required for the application, run the following line in the terminal.

    \`\`\`
    ${data.dependencies}
    \`\`\`

    ## Usage
    ${data.usage}

    ## Testing
    To test the application, run the following line in the terminal.

    \`\`\`
    ${data.test}
    \`\`\`
    
    ## Contribution
    ${data.contribution}

    ## Contact
    If you have questions, contact the author of the repository, ${data.username}, at ${data.email}.

`;
}

module.exports = generateMarkdown;
