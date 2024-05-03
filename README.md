# Block-app-Backend


# Block App

Block App is a Node.js application for managing blocks. It provides CRUD functionality for blocks, allowing users to create, read, update, and delete blocks.

## Table of Contents

- [Features](#features)
- [Testing with Postman](#TestingwithPostman)
- [API Versioning](#APIVersioning)
- [Compulsory Route](#CompulsoryRoute)
- [Installation](#installation)


  
## Features

- **Create Block**: Users can create new blocks with a title, description, and date.
- **Read Block**: Users can view details of existing blocks.
- **Update Block**: Users can edit title, description, or date of existing blocks.
- **Delete Block**: Users can remove blocks from the system.


## Testing with Postman

You can use Postman to send requests to the Block App API and test its functionality. Here's how you can do it:


## API Versioning

The Block App follows API versioning to manage changes and updates to the API endpoints. Currently, the following API version is supported:

- **Version 1 (v1)**: This is the initial version of the API.

To access the API endpoints for version 1, prepend `/api/v1` to the route paths. For example:

- `/api/v1/blocks`: Retrieve all blocks for version 1 of the API.
- `/api/v1/blocks/:id`: Retrieve a specific block by ID for version 1 of the API.
- `/api/v1/users`: Access user-related endpoints for version 1 of the API.

## Compulsory Route

The following route is compulsory for all API versions:

- **Health Check Route**: 

  - **GET /api/health**: Check the health status of the API. This route is always available and does not require authentication.

  Example Usage:
  ```bash
  curl -X GET http://localhost:3000/api/health






1. Open Postman and create a new request.

2. Set the request method (GET, POST, PUT, DELETE) and URL according to the API endpoint you want to test. For example:
   - `GET /blocks`: Retrieve all blocks.
   - `GET /blocks/:id`: Retrieve a specific block by ID.
   - `POST /blocks`: Create a new block.
   - `PUT /blocks/:id`: Update an existing block by ID.
   - `DELETE /blocks/:id`: Delete a block by ID.

3. Add any required headers or parameters to the request, such as authentication tokens or request body (for POST and PUT requests).

4. Send the request and observe the response from the server. Check the status code, response body, and any error messages.

5. Repeat steps 2-4 to test other API endpoints and scenarios.

Here's an example of sending a POST request to create a new block:

- Method: POST
- URL: http://localhost:6000/blocks
- Headers: Content-Type: application/json
- Body (raw JSON):
  ```json
  {
    "title": "New Block",
    "description": "This is a new block created with Postman.",
    "date": "2024-05-24"
  }

