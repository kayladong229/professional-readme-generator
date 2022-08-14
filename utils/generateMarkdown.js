// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![badge](https://img.shields.io/badge/license-${license}-blue)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { //`- [License](#license)`
  if (license !== 'None') {
    return `- [License](#license)`;
 } else {
  return '';
 }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    This application is covered under the ${license} license. For more information, please click the following link: [${license}](https://choosealicense.com/licenses/${license})`;
 } else {
  return '';
 }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseLink(data.license)}
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contribution
  ${data.contributions}

  ## Test
  ${data.tests}

  ## Questions
  If there are any questions, please send an email to ${data.email}.

  Check out my Github profile: [${data.github}](https://github.com/${data.github})
`}

module.exports = generateMarkdown;
