# Nestly File Upload Server

This is a Node.js application built with Express.js to handle file uploads. It uses multer for file upload handling and stores the uploaded files in different directories based on their types.

## Features
- Supports uploading avatars and apartment images.
- Allows single upload for avatars and multiple uploads (up to 5 images) for apartment images.
- Uses MongoDB to store information about the uploaded images.

## Installation
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file and add your MongoDB connection string as `MONGO_URI`.
4. Start the server by running `node server.js`.

## Endpoints
- **POST /upload/avatar**: Uploads a single avatar image. Requires a query parameter `id` to specify the user's ID.
- **POST /upload/apartment**: Uploads multiple apartment images. Requires a query parameter `id` to specify the apartment's ID.

## Usage
1. To upload an avatar:
   - Send a POST request to `/upload/avatar` with a form-data field named `avatar` containing the image file.
   - Include the user's ID as a query parameter `id`.

2. To upload apartment images:
   - Send a POST request to `/upload/apartment` with a form-data field named `images` containing multiple image files.
   - Include the apartment's ID as a query parameter `id`.

## Dependencies
- express: ^4.17.1
- cors: ^2.8.5
- multer: ^1.4.3
- dotenv: ^10.0.0
- mongoose: ^6.1.2

## Environment Variables
- **MONGO_URI**: MongoDB connection string.

## Author
Jew Kofi Larbi Danquah

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
