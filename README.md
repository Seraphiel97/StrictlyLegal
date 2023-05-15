# Strictly Legal

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
![Maintainer](https://img.shields.io/badge/maintainer-Seraphiel97-blue)

***
## Technologies Implemented:
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JS](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)


![MAC-img](https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=apple&logoColor=white)
![Heroku badge](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![Visual Studio](https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white)

[Powered by OpenAI](https://openai.com/)
[CSS Effect by Manuel Pinto](codepen.io/P1N2O/pen/pyBNzX)
***
## Strictly Legal Overview:

![homepage](https://github.com/Seraphiel97/StrictlyLegal/blob/dev/src/assets/home.png?raw=true)

**Title**: United States General Assembly Resolution: Creation of Strictly Legal for Enhanced Access to State Laws

**Whereas**, the United States General Assembly recognizes the importance of ensuring public access to laws and legal resources in order to foster a well-informed citizenry; and

**Whereas**, technological advancements present an opportunity to leverage the power of the internet and user-generated expertise to enhance accessibility and comprehension of state laws; and

**Whereas**, a web application called "Strictly Legal" has been developed with the purpose of making state laws more easily accessible to users by collecting and verifying expertise provided by other users; and

**Whereas**, the Strictly Legal web application incorporates robust verification mechanisms to ensure the accuracy and reliability of the information provided by users, thus maintaining the integrity of the legal information shared; and

**Whereas**, Strictly Legal employs advanced algorithms and machine learning techniques to identify and rank the most credible user contributions, facilitating efficient and reliable access to relevant legal information; and

**Whereas**, the Strictly Legal web application is designed to be user-friendly, ensuring accessibility for individuals with varying levels of legal knowledge and technical proficiency; and

**Whereas**, the development and implementation of the Strictly Legal web application will contribute to an informed citizenry, encourage civic engagement, and support the effective functioning of our democratic society;

Now, therefore, be it resolved by the United States General Assembly, that:

**Section 1**: The creation and implementation of the Strictly Legal web application is endorsed and supported as a valuable tool for increasing access to state laws and fostering a better understanding of legal provisions.

**Section 2**: The developers and administrators of the Strictly Legal web application are encouraged to collaborate with relevant government agencies, legal experts, and non-profit organizations to ensure the accuracy, comprehensiveness, and up-to-date nature of the legal information provided.

**Section 3**: This resolution shall take effect immediately upon its passage.

Sponsor: Seth Graves

Date: May 15, 2023

***
## Getting Started:

To begin learning about your state laws and/or share your expertise on your local area, click [HERE](https://strictly-legal.herokuapp.com/) and join the Strictly Legal community!

* Project Planning Resources:
    * [Wireframe](https://whimsical.com/PCs2xqtB1JyL8KqHPz71MH)

    * [ERD](https://lucid.app/lucidchart/5d0b1a84-28bc-41a7-8436-095917366ad3/edit?viewport_loc=-23%2C-54%2C2229%2C1124%2C0_0&invitationId=inv_8cdd2ca7-0dda-4b4b-a275-bf46d68d7bd0)

    * [Trello Board](https://trello.com/b/CsATH2f2/capstone-project)

***
## Current Features:

* Creation of laws based upon prior knowledge of the user

![addlaw](https://github.com/Seraphiel97/StrictlyLegal/blob/dev/src/assets/add-law.png?raw=true)

* Displaying of the collection of laws:

![browselaws](https://github.com/Seraphiel97/StrictlyLegal/blob/dev/src/assets/browse-laws.png?raw=true)

* Incorporation of OpenAI API calls to get a partisan opinion of a law entered by a user:
 ```
    const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: `Write a 75 word maximum US ${ideology} opinion on ${law.question} and ${law.answer} in ${law.state.name} with the following concepts: ${query}`,
            temperature: 0.5,
            max_tokens: 200,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        })
```

![homepage-with-response](https://github.com/Seraphiel97/StrictlyLegal/blob/dev/src/assets/home-with-response.png?raw=true)

* Administrative law verification functionality


***
## Next Steps:

* Implementation of search filters for the Browse Laws page
* Incorporation of a geo-location API
* Implementation of a second OpenAI API call designed to analyze an individual's actions to determine illicit activity











