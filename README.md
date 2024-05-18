# API Comment Project

## Project Description

This project is an API for managing comments, built with Node.js, TypeScript, and Prisma ORM. It uses Express.js for the server framework.

## Prerequisites

Ensure you have the following software installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (version 6 or higher)
- [PostgreSQL](https://www.postgresql.org/) (or any other database compatible with Prisma)

## Installation

1. Clone the repository:

   ```sh
    git clone https://github.com/santiagolopez02/api-comment.git
    cd api-comment

   ```

2. Install dependencies:

   ```sh
      npm install

   ```

3. Configuration

   - Create a .env file in the root directory of the project with the following configuration (adjust the values according to your environment)

     DATABASE_URL="postgresql://postgres@localhost:5432/your_database"

4. Database Migrations

   - Generate the Prisma client:

     ```sh
     npx prisma generate

     ```

   - Apply the schema to set up the database:

     ```sh
     npx prisma db push

     ```

5. Running the Application

   -To build the project:

   ```sh
   npm run build

   ```

   -To compiles the code and starts the server in development mode with automatic reload.

   ```sh
   npm run dev

   ```

This README file provides all the necessary information for a developer to understand, set up, and run your project correctly.
