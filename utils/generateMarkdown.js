//.md file writing - includes responses and API Data 
function generateMarkdown(data) {  
  return `${data.pTitle}
${data.description}
${data.TOC}
${data.installation}
${data.usage}
${data.license}
${data.contribution}
${data.testing}
${data.questions}
${data.email}
![Profile Photo](${data.avatar_url})
![Creator Badge](https://img.shields.io/static/v1?label=Creator&message=${data.gUsername}&color=${data.creatorbadgecolor})
![License Badge](https://img.shields.io/static/v1?label=License&message=${data.license.split(' ').join('%20')}&color=${data.licensebadgecolor})
![Installation Badge](https://img.shields.io/static/v1?label=Install&message=${data.installation.split(' ').join('%20')}&color=${data.installationbadgecolor})
`
};

module.exports = generateMarkdown;
