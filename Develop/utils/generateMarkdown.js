// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case "Apache License 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GNU General Public License v3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "MIT License":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "BSD 2-Clause \"Simplified\" License":
      return "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
      break;
    case "BSD 3-Clause \"New\" or \"Revise\" License":
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "Creative Commons Zero v1.0 Universal":
      return "[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)";
      break;
    case "Eclipse Public License 2.0":
      return "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      break;
    case "GNU Affero General Public License 3.0":
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
      break;
    case "GNU General Public License 2.0":
      return "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      break;
    case "GNU Lesser General Public License 3.0":
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
      break;
    case "Mozilla Public License 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "Apache License 2.0":
      return "https://choosealicense.com/licenses/apache-2.0/";
      break;
    case "GNU General Public License v3.0":
      return "https://choosealicense.com/licenses/gpl-3.0/";
      break;
    case "MIT License":
      return "https://choosealicense.com/licenses/mit/";
      break;
    case "BSD 2-Clause \"Simplified\" License":
      return "https://choosealicense.com/licenses/bsd-2-clause/";
      break;
    case "BSD 3-Clause \"New\" or \"Revise\" License":
      return "https://choosealicense.com/licenses/bsd-3-clause/";
      break;
    case "Creative Commons Zero v1.0 Universal":
      return "https://choosealicense.com/licenses/cc0-1.0/";
      break;
    case "Eclipse Public License 2.0":
      return "https://choosealicense.com/licenses/epl-2.0/";
      break;
    case "GNU Affero General Public License 3.0":
      return "https://choosealicense.com/licenses/agpl-3.0/";
      break;
    case "GNU General Public License 2.0":
      return "https://choosealicense.com/licenses/gpl-2.0/";
      break;
    case "GNU Lesser General Public License 3.0":
      return "https://choosealicense.com/licenses/lgpl-3.0/";
      break;
    case "Mozilla Public License 2.0":
      return "https://choosealicense.com/licenses/mpl-2.0/";
      break;
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license) {
    return 'License \n Copyright (c) All rights reserved. \n Licensed under the  license.';
  }
  else return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Badges
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  -[Installation](#installation)
  -[Usage](#usage)
  -[Credits](#credits)
  -[License](#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits

  ## License
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
`;
}

module.exports = {generateMarkdown};
