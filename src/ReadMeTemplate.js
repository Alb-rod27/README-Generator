function ReadMeTemplate(data) {
  return `
  # ${data.title}
  https://github.com/Alb-rod27/README-Generator

  ## Description
  ${data.description}

  ## Table of contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [license](#license)
  * [Contributors](#contributors)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## License
  ${data.license}
        
  ## Contributors
  ${data.contributors}

  ## Questions
  * Github username: ${data.github}
  * If You have any questions, please feel free to contact me at ${data.email}
  `;
}

module.exports = ReadMeTemplate;