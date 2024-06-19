## Netflix Clone

This Netflix Clone is a full-stack application that mimics the core functionalities of the popular streaming service, Netflix. It features a dynamic user interface for browsing movies, user authentication, and the ability to search and watch movie trailers.

## Features
 User Authentication: Secure login and registration system.
 Browse Movies: Users can browse movies categorized as Now Playing, Popular, Top Rated, and Upcoming.
 Movie Search: Search functionality to find movies.
 Responsive Design: Adapts smoothly to various screen sizes.

## Technologies
 Frontend: React, Redux for state management, CSS for styling.
 Backend: Node.js with Express, MongoDB for database, Mongoose for object data modeling.
 Authentication: bcrypt.js for hashing passwords, JSON Web Tokens (JWT) for session management.
 APIs: The Movie Database (TMDB) for movie data.

## Live Demo
Visit the live demo at: https://keen-seahorse-bb8394.netlify.app/

## Getting Started Prerequisites
Node.js
NPM or Yarn
MongoDB
Installation
Clone the repository

# bash

Copy code git clone: https://github.com/PradhumnChandrawat/Netflix-clone-Geekathon.git

cd netflix-clone

Install dependencies

## Frontend:

Copy code

cd frontend_netflix

npm install

## Backend:

bash

Copy code

cd backend_netflix

npm install

Set up environment variables


Copy the .env.example file to .env and update the variables accordingly.

## Backend .env example:

makefile

Copy code

PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET_KEY=your_jwt_secret

## Frontend .env example:

bash
Copy code

REACT_APP_API_URL=http://localhost:5000/api

Run the application

## Backend:

bash
Copy code
npm start

## Frontend:

bash
Copy code
cd frontend_netflix
npm start

## Screenshots
Here are some more screenshots from the application:
# SignUP Page
![Screenshot 2024-06-19 233111](https://github.com/PradhumnChandrawat/Netflix-clone-Geekathon/assets/133633873/5e3ca515-a3aa-461b-8e42-1443fa780f64)

# Login Page
![Screenshot 2024-06-19 233144](https://github.com/PradhumnChandrawat/Netflix-clone-Geekathon/assets/133633873/e2cd56e6-1d3d-476a-a27c-dd09cb47108e)

# Header and Browse Page 
![Screenshot 2024-06-19 233326](https://github.com/PradhumnChandrawat/Netflix-clone-Geekathon/assets/133633873/f0f9cd90-9951-45df-8361-518dbe2f24db)
![Screenshot 2024-06-19 233313](https://github.com/PradhumnChandrawat/Netflix-clone-Geekathon/assets/133633873/a4d05760-15b6-47f3-a1f0-860652bec211)

# Search Page 
![Screenshot 2024-06-19 233345](https://github.com/PradhumnChandrawat/Netflix-clone-Geekathon/assets/133633873/09d37f33-5137-4df0-a09f-04c9729b301f)

## Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request

Contact
Your Email - chandrawatpradhumn1@gmail.com
