//Destructure Array into variables

// function destructureArray(arr){
//     const { name, github, email, data } = arr

//     console.log(name);
//     console.log(github);
//     console.log(email);
//     destructureData(data[0]);
//     generateQuestionsSection(name, github, email);
// };

// function destructureData(arr){
//     const { projectTitle, projectDescription, githubLink, installInput, usageInput, creditsInput, licenseCheckbox, badgesCheckbox, featureInput, testingInput } = arr.data[0]
    
//     console.log('title', projectTitle);
//     console.log('description', projectDescription);
//     console.log('repo', githubLink);
//     console.log('install', installInput);
//     console.log('usage', usageInput);
//     console.log('credits', creditsInput);
//     console.log('license', licenseCheckbox);
//     console.log('badges', badgesCheckbox);
//     console.log('features', featureInput);
//     console.log('testing', testingInput);

// };

function generateReadMe(arr){
    // console.log(arr);

    const { name, github, email } = arr
    const { projectTitle, projectDescription, githubLink, installInput, usageInput, creditsInput, featureInput, testingInput } = arr.data[0];
    const  license = arr.data[0].licenseCheckbox.join(', ');
    const badges = arr.data[0].badgeCheckbox.join(', ');

    return`
    # ${projectTitle}
    ---
    ${badges}

    **Table of Contents**
    ---

    **Description**
    ---
    ${projectDescription}

    **Installation Information**
    ---
    ${installInput}

    **Usage**
    ---
    ${usageInput}

    **Credits**
    ---
    Thank you to: ${creditsInput}

    **Licensing**
    ---
    This product is licensed under the ${license} license.

    ${license}

    **Features**
    ---
    ${featureInput}

    **Testing Information**
    ---
    ${testingInput}

    **Contributing**
    ---
    Want to contribute to this project?  Please make a pull request at ${githubLink}.

    **Questions and Contact Information**
    ---
    ${name}
    GitHub: www.github.com/${github}
    Email: ${email}
    `
};


module.exports = {
    //destructureArray,
    //destructureData,
    generateReadMe
};
