function generateMarkdown(data) {
    return `
    # ${userInput.title}

    ## Description
        ${data.description}

    ## Table of contents
    [Description](#description)
    [Installation](#installation)
    [Usage](#usage)
    [Credits](#credits)
    [license](#license)
    [Features](#features)
    [Contributors](#contributors)

    ## Installation
      ${data.installation}

    ## Usage
      ${data.usage}

    ## License

    ## Contributors
        ${data.contributors}
    ## Tests

    ## Questions
    `
}

module.exports = generateMarkdown;