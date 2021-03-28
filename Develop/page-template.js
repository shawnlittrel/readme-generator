//Destructure Array into variables

function generateReadMe(arr){
    console.log('mock data', arr)
    const { name, github, email } = arr
    const { projectTitle, projectDescription, githubLink, installInput, usageInput, creditsConfirm, creditsInput,featuresConfirm, featureInput, testingConfirm, testingInput, contactConfirm, contactInput } = arr.data[0];
    const badges = arr.data[0].badgeCheckbox;
    const licenseType = arr.data[0].licenseCheckbox;
    const contents = arr.data[0];


    return `
        ${generateTitle(projectTitle)}
        ${badgeIdentifier(badges, github, projectTitle)}
        ${generateTOC(contents)}
        ${generateDescription(projectDescription)}
        ${generateInstall(installInput)}
        ${generateUsage(usageInput)}
        ${generateCredits(creditsInput, creditsConfirm)}
        ${generateLicensing(licenseType, name)}
        ${generateFeatures(featureInput, featuresConfirm)}
        ${generateTesting(testingInput, testingConfirm)}
        ${generateContribute(githubLink)}
        ${generateQuestions(name, githubLink, email, contactConfirm, contactInput)}
    `
};

function generateTitle(title){
    return `#${title}
    ---
    `;  
};

function badgeIdentifier(arr, github, projectTitle){
    let githubLC = '';
    let githubTL = '';
    let githubIC = '';
    let githubCI = '';
    let githubPR = '';
    let githubLCD = '';
    const badges = arr;

    //Check for each available badge.  If it exists, include in section.  If not, leave an empty string.
    if (badges.includes("GitHub Language Count")){
        githubLC = `![GitHub language count](https://img.shields.io/github/languages/count/${github}/${projectTitle})`
    } else {
        githubLC = ''
    };

    if (badges.includes("GitHub Top Language")){
        githubTL = `![GitHub top language](https://img.shields.io/github/languages/top/${github}/${projectTitle})`
    } else {
        githubTL = ''
    };

    if (badges.includes("GitHub Issues Counter")){
        githubIC = `![GitHub issues](https://img.shields.io/github/issues/${github}/${projectTitle})`
    } else {
        githubIC = ''
    };

    if (badges.includes("GitHub Closed Issues")){
        githubCI = `![GitHub closed issues](https://img.shields.io/github/issues-closed/${github}/${projectTitle})`
    } else {
        githubCI = ''
    };

    if (badges.includes("GitHub Pull Requests")){
        githubPR = `![GitHub pull requests](https://img.shields.io/github/issues-pr/${github}/${projectTitle})`
    };

    if (badges.includes("GitHub Last Commit Date")){
        githubLCD = `![GitHub last commit](https://img.shields.io/github/last-commit/${github}/${projectTitle})`
    }

return`
${githubLC} ${githubTL} ${githubIC} ${githubCI} ${githubPR} ${githubLCD}
---

`
};

function generateTOC(arr, creditsConfirm, featuresConfirm, testingConfirm){
    console.log('TOC DATA', arr)
    if(creditsConfirm){
        var creditsLink = '[Credits](## Credits)'
    } else{
        creditsLink = ''
    };

    if(featuresConfirm){
        var featuresLink = '[Features](## Features)'
    } else {
        featuresLink = ''
    };

    if(testingConfirm){
        var testingLink = '[Testing](## Testing)'
    } else {
        testingLink = ''
    };

    return`
    #Table Of Contents
    ---
    [Installation](## Installation)
    [Usage] (## Usage)
    ${creditsLink}
    [Licensing](## Licensing)
    ${featuresLink}
    ${testingLink}
    $[Questions and Comments](## Questions)
    `   
}

function generateDescription(description){
    return `
    ## Description
    ---
    ${description}
    
    `
};

function generateInstall(installation){
    return `
    ## Installation Instructions
    ---
    ${installation}

    `
};

function generateUsage(usage){
    return `
    ## How To Use
    ---
    ${usage}

    `
};

function generateCredits(credits, creditsConfirm){
    if(creditsConfirm){
         return `
    ## Credits
    ---
    Thank you to:
    ${credits}

    `   
    } else {
        return ''
    };

};

function generateLicensing(licenseType, name){
    let licenseText = ''
    if(licenseType === 'MIT'){
        licenseText = 
    `Copyright ${new Date().getFullYear()} ${name} Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:  
        
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. 
        
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
    }  else if(licenseType === 'ISC'){
        licenseText = 
        `ISC License

        Copyright ${new Date().getFullYear()}, ${name}
        
        Permission to use, copy, modify, and/or distribute this software for any
        purpose with or without fee is hereby granted, provided that the above
        copyright notice and this permission notice appear in all copies.
        
        THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
        WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
        MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
        ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
        WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
        ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
        OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
        `   
    } else if(licenseType === 'Unlicense'){
        licenseText =
        `This is free and unencumbered software released into the public domain.

        Anyone is free to copy, modify, publish, use, compile, sell, or
        distribute this software, either in source code form or as a compiled
        binary, for any purpose, commercial or non-commercial, and by any
        means.
        
        In jurisdictions that recognize copyright laws, the author or authors
        of this software dedicate any and all copyright interest in the
        software to the public domain. We make this dedication for the benefit
        of the public at large and to the detriment of our heirs and
        successors. We intend this dedication to be an overt act of
        relinquishment in perpetuity of all present and future rights to this
        software under copyright law.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
        EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
        IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
        OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
        ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
        OTHER DEALINGS IN THE SOFTWARE.
        
        For more information, please refer to [Unlicense.org](https://unlicense.org)`
    }
    return `
    ## Licensing
    ---
    ${licenseText}

    `;
};

function generateFeatures(features, featuresConfirm){
    if(featuresConfirm){
    return `
    ## Features
    ---
    ${features}
    `
    } else {
        return ''
    }
};

function generateTesting(testing, testingConfirm){
    if(testingConfirm){
    return `
    ## Testing
    ---
    ${testing}

    `
    } else {
        return ''
    }
}

function generateContribute(contribute){
    return `
    ## Contribute To This Project
    ---
    Want to contribute to this project?  Please make a pull request at ${contribute}

    `
};

function generateQuestions(name, githubLink, email, contactConfirm, contactInput){
    if(contactConfirm){
        return `
        ## Questions And Contact Information
        ---
        ${contactInput}
        ${name}
        GitHub: (${githubLink})
        Email: ${email}
        `
    } else {
    return `
    ## Questions And Contact Information
    ---
    ${name}
    GitHub: (${githubLink})
    Email: ${email}
    `
    }
};

module.exports = {
    generateReadMe
};
