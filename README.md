### Language Learning Game

A simple Language Learning Game web application built with Node.js, Express, MongoDB, React.js and firebase.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Example Endpoint](#example-endpoint)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [License](#license)

## Description

Welcome to the Language Learning Quiz App! This interactive platform allows users to seamlessly Sign In or Sign Up and embark on a language learning journey. Upon signing in, users can choose their preferred language for learning. The app then presents them with a series of engaging questions and multiple-choice options to test and enhance their language skills. Whether you're a beginner or looking to sharpen your language proficiency, our quiz app offers an enjoyable and educational experience. Get started on your linguistic adventure today!

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Suman12378/Language-Learning-Game.git
   ```

   ## For Frontend

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```
  
3. Navigate to the Backend directory:
   
    ```bash
   cd backend
   ```
4. Install dependecies:

   ```base
     npm install
   ```
5. Initialize Firebse in Backend and Frontend for authentication

## Usage

1. Provide Backend Port and MONGO_URL to server.js


2. Start the backend server:

   ```bash
   npm run dev
   ```

   The server will start using nodemon, automatically restarting on file changes.

3. Access the application at [http://localhost:4000](http://localhost:3000).

3. Use the provided API endpoints to fetch the user data and questions on different language.

### Example Endpoint

```http
GET http://localhost:3000/api/v1/get
```

  ## Scripts

- **start:** Start the development server using `nodemon`.
- **start:prod:** Start the production server using `node`.

## Dependencies

- **express:** Fast, unopinionated, minimalist web framework for Node.js.
- **nodemon:** Monitor for any changes in your Node.js application and automatically restart the server.
- **firebase:** Use for Authentication and verify the user at backend side.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
