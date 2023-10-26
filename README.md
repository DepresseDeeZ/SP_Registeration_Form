# SP Assignment: Registration Form with Express and MySQL
## Screenshots
![Search](https://github.com/DepresseDeeZ/SP_Registeration_Form/assets/132985504/76eb3481-1aa6-4457-ae50-dc40263c86f8)
![Update](https://github.com/DepresseDeeZ/SP_Registeration_Form/assets/132985504/d851a65d-f0b6-4d13-8135-bb0cecc88fec)
![Delete](https://github.com/DepresseDeeZ/SP_Registeration_Form/assets/132985504/6219173c-0bd8-4645-9a06-0bbb17f07416)
![Insert](https://github.com/DepresseDeeZ/SP_Registeration_Form/assets/132985504/b4abecae-6697-42ad-a8fe-3233b4acb3fe)

![Screenshot 1](screenshots/screenshot1.png)
*Caption for Screenshot 1*
![Screenshot 2](screenshots/screenshot2.png)
*Caption for Screenshot 2*
![Screenshot 1](screenshots/screenshot1.png)
*Caption for Screenshot 1*
![Screenshot 2](screenshots/screenshot2.png)
*Caption for Screenshot 2*

Welcome to the SP Assignment GitHub repository! This repository contains a Registration Form web application created using Express, MySQL, HTML, CSS, and JavaScript. This README file provides an overview of the project, installation instructions, features, challenges faced, and licensing information.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Challenges](#challenges)
- [License](#license)
- [Contributing](#contributing)

## Introduction

This project is a Single Page Assignment that showcases a Registration Form web application. It is built with a stack of web technologies, including Express.js for the backend, MySQL for the database, and a combination of HTML, CSS, and JavaScript for the frontend. The application provides functionality to insert, update, delete, and search records in the database.

## Features

- **User Registration**: Users can fill out a registration form, providing their personal information.
- **Database Operations**: The application can perform various database operations:
  - **Insert**: New user data can be added to the database.
  - **Update**: Users can modify their information.
  - **Delete**: Users can be removed from the database.
  - **Search**: Users can be found based on their details.

## Installation

To get this project up and running, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   ```
2. Install the project dependencies:

 ```bash
Copy code
cd your-repo-name
npm install
 ```
3. Configure your MySQL database by updating the connection details in config/db.config.js.

4. Initialize the MySQL database tables by running the SQL script provided in database.sql.

5. Start the application:
 ```bash
Copy code
npm start
 ```
The application should now be running on http://localhost:3000.

## Usage
To use the Registration Form web application, follow these steps:

1. Access the Registration Form by opening the web application in your browser at http://localhost:3000 (or the URL where your application is hosted).

2. On the homepage, you will find a user registration form. Fill out the form with the required information, such as name, email, and contact details.

3. Click the "Register" button to submit the form. This will add the user's information to the database.

4. You can also use the following features:

  - **Update**: To update user information, select a user from the list and click the "Update" button. Update the user's details in the form and click "Save Changes."

  - **Delete**: To delete a user, select a user from the list and click the "Delete" button.

  - **Search**: To search for a user, enter search criteria in the search bar and click "Search." The matching users will be displayed.

## Challenges
While developing this project, I encountered several challenges and how I overcame them:

1. Database Integration: Setting up the MySQL database and configuring the connection posed initial challenges. I overcame this by thoroughly studying MySQL documentation and consulting online resources.

2. Security: Ensuring that the application is secure from SQL injection and other vulnerabilities required implementing data validation and prepared statements in MySQL queries.

3. Frontend Design: Designing an appealing and user-friendly interface was a challenge. I researched modern design principles and used CSS to create a visually pleasing user experience.

4. Express Routing: Defining routes and handling HTTP requests effectively was challenging. I studied Express.js documentation and used middleware to structure the routes.

## License
This project is open-source and free to use under the MIT License. You can find the full license text in the LICENSE file.

## Contributing
Contributions to this project are welcome. Feel free to open issues, create pull requests, or suggest improvements. Please follow the Contributing Guidelines to ensure a smooth collaboration process.
