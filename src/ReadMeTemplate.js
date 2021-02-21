function ReadMeTemplate(data) {
    return `
    # ${data.title}

    ## Description
      ${data.description}

    ## Table of contents
    -[Description](#description)
    -[Installation](#installation)
    -[Usage](#usage)
    -[Credits](#credits)
    -[license](#license)
    -[Contributors](#contributors)

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
    
    `;
}

module.exports = ReadMeTemplate;