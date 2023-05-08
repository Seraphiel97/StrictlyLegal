# Cottage & Castle

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
![Maintainer](https://img.shields.io/badge/maintainer-Seraphiel97-blue)
![logo](https://raw.githubusercontent.com/Seraphiel97/cottage-and-castle/b23d38e9b010350a58b24b0f880c1f84a25526f4/src/assets/businessLogo.svg)

***
## Technologies Implemented:
![JS](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)


![MAC-img](https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=apple&logoColor=white)
![Heroku badge](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

***
## Cottage & Castle Overview:

At Cottage & Castle, we believe that cleaning is more than just a chore. It's a magical transformation that turns a messy and chaotic space into a beautiful and sparkling retreat. We use our cleaning powers to create a sense of wonder and enchantment in every home we clean.


Our team of skilled cleaners is like a group of fairy godmothers, bringing a touch of magic to every corner of your home. We wave our magic wands, and your living room becomes a cozy haven, your kitchen a place of delicious smells and warmth, and your bedroom a serene sanctuary.


Skillfully crafted using React and Vanilla Javascript technologies, Cottage & Castle has created a scheduling portal to assist clients in the tidying of their homes, petite and majestic alike. Clients are welcomed to request exactly which services they require, and can expect swift approval from our owner, [Seth Graves](https://www.linkedin.com/in/sethlgraves/), through the admin features of the application.

Schedule your next appointment with us today! It may not be magic, but I promise that our services will fulfill your every wish.

![request-page](https://github.com/Seraphiel97/cottage-and-castle/blob/main/src/assets/appt-request.png?raw=true)

***
## Getting Started:
Check out [Cottage & Castle](https://cottage-and-castle.herokuapp.com/) and allow us to whisk away all your residential troubles! 

If you're interested in the UI planning of this project, my wireframe  can be found [here](https://whimsical.com/cottage-and-castle-web-app-CE3vDbBY81poeFWopZ9vjf)!

The [ERD](https://lucid.app/lucidchart/e390c124-e2cc-46ae-9dfd-5bc01428618e/edit?viewport_loc=-319%2C-22%2C3294%2C1661%2C0_0&invitationId=inv_af6e2221-265b-40af-bc7f-ae0d0d0ec7a1) for Cottage & Castle describes the relationships used in the creation of this application.

For the thorough and intrepid visitor, this [Trello Board](https://trello.com/b/IV0hku7b/cottage-castle)  reveals my minute planning from step one!

***
## Current Features:
* Account Creation/Login Functionality
![acct-registration](https://github.com/Seraphiel97/cottage-and-castle/blob/main/src/assets/acct-registration.png?raw=true)

* Appointment Request
* Administrative Appointment Approval
    * The following code block is responsible for handling the finding and updating of appointments at the request of the admin:
    ```
    async function changeStatus(req, res) {
    try {
        if (req.body.status === "Requested") {
            const appt = await Appointment.updateOne({date: req.body.date}, {status: 'Confirmed'})
            res.json(appt);
        } else if (req.body.status === "Confirmed") {
            const appt = await Appointment.updateOne({date: req.body.date}, {status: 'Completed'})
            res.json(appt);
        } else if (req.body.status === "Completed") {
            const appt = await Appointment.updateOne({date: req.body.date}, {status: 'Confirmed'})
            res.json(appt);
        }
    } catch (err) {
        res.status(err).json(err);
    }
    }
    ```
![admin-approval](https://github.com/Seraphiel97/cottage-and-castle/blob/main/src/assets/lg-appt-management.png?raw=true)

* Responsive, Mobile-First Design
![mobile-approval](https://github.com/Seraphiel97/cottage-and-castle/blob/main/src/assets/mobile-appt-management.png?raw=true)

***
## Next Steps:
* Recurring Appointment Functionality
* Refactor Models to Include Property Address
* Message Functionality Between Client/Admin 










