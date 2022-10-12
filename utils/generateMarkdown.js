// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';

  if(license === 'Apache') {
    badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
  } else if (license === 'BSD-3'){
    badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]';
  } else if (license === 'BSD-2'){
    badge = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]';
  } else if (license === 'GPL'){
    badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
  } else if (license === 'LGPL'){
    badge = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]';
  } else if (licesne === 'MIT'){
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
  } else if (license === 'Mozilla'){
    badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]';
  } else if (license === 'Eclipse'){
    badge = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]';
  } else {
    badge = '';
  };

  return badge;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link;

  switch(license){
    case 'Apache':
      link = 'http://www.apache.org/licenses/LICENSE-2.0';
      break;
    
    case 'BSD-3':
      link = 'https://opensource.org/licenses/BSD-3-Clause';
      break;
    
    case 'BSD-2':
      link = 'https://opensource.org/licenses/BSD-2-Clause';
      break;

    case 'GPL':
      link = 'https://www.gnu.org/licenses/gpl-3.0';
      break;

    case 'LGPL':
      link = 'https://www.gnu.org/licenses/lgpl-3.0';
      break;

    case 'MIT':
      link = 'https://opensource.org/licenses/MIT';
      break;

    case 'Mozilla':
      link = 'https://opensource.org/licenses/MPL-2.0';
      break;

    case 'Eclipse':
      link = 'https://opensource.org/licenses/EPL-1.0';
      break;

    case 'None':
      link = '';
      break;
  };

  return link;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None'){
    return '';
  } else {
    return `## License 
    ${data.title} is protected by ${data.license}. More info here: ${data.link}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## [Table of Contents](#ToC)
  > * [Description](#description)
  > * [Installation](#installation)
  > * [Usage](#usage)
  > * [Contribution](#contribution)
  > * [Testing](#testing)
  > * [License](#license)
  > * [Contact](#contact)
  ## [Description](#description)
  ${data.description}
  ## [Installation](#installation) 
  ${data.installation}
  ## [Usage](#usage)
  ${data.usage}
  ## [Contribution](#contribution)
  ${data.contribution}
  ## [Testing](#testing)
  ${data.testing}
  ## [License](#license)
  Please view this link : ${renderLicenseLink(data.license)} to receive further information about the license for this project.
  ## [Contact](#contact)
  Please contact at ${data.email} or ${data.github} if you have any additional questions
`;
}

module.exports = generateMarkdown;