// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var licenseBadge

  if(license){
    licenseBadge = `[![License Badge](https://img.shields.io/badge/License-${license}-green.svg)]`
  }

  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var licenseLink

  if(license = "MIT"){
    licenseLink = "(https://opensource.org/licenses/MIT)"
  } else if (license = "GPLv3"){
    licenseLink = "(https://www.gnu.org/licenses/gpl-3.0)"
  } else if (license = "Apache_2.0"){
    licenseLink = "(https://opensource.org/licenses/Apache-2.0)"
  } else if (license = "CC0_1.0"){
    licenseLink = "(http://creativecommons.org/publicdomain/zero/1.0/)"
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return renderLicenseBadge(license) + renderLicenseLink(license);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseSection(data.license)}

## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Testing](#Testing)
- [Contribution](#Contribution)
- [Contact](#Contact)

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
