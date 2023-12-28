# **RESTful API - Coding Studio Academy Final Project**

By: Arisandi Satria Jeujanan

Link API : _coming soon_

## Documentation

### 1. **Register User**

- Endpoint: `api/auth/register`
- Method: `POST`
- Auth: NO
- Body:

  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string",
    "confirmPassword": "string"
  }
  ```

  Example:

  ```json
  {
    "username": "User2",
    "email": "user2@gmail.com",
    "password": "user2",
    "confirmPassword": "user2"
  }
  ```

- Response:

  - Success: `201 Created`

    Example:

    ```json
    {
      "message": "User created succesfully",
      "data": {
        "username": "User2",
        "email": "user2@gmail.com",
        "role": "customer",
        "avatar": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        "_id": "658d6e8c265259fe030e50e1"
      }
    }
    ```

  - Error: `400 Bad Request` || `409 Conflict` || `500 Internal Server Error`

    Example:

    If there is empty input `400 Bad Request`:

    ```json
    {
      "success": false,
      "statusCode": 400,
      "message": "Please, fill all input!"
    }
    ```

    If email is invalid `400 Bad Request`:

    ```json
    {
      "success": false,
      "statusCode": 400,
      "message": "Invalid email!"
    }
    ```

    If email has already registered `409 Conflict`:

    ```json
    {
      "success": false,
      "statusCode": 409,
      "message": "Email is already registered!"
    }
    ```

    If the server get an error `500 Internal Server Error`:

    ```json
    {
      "success": false,
      "statusCode": 500,
      "message": "Internal server error!"
    }
    ```

### 2. **Login User**

- Endpoint: `api/auth/login`
- Method: `POST`
- Auth: NO
- Body:

  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```

  Example:

  ```json
  {
    "email": "user1@gmail.com",
    "password": "user1"
  }
  ```

- Response:

  - Success: `200 OK`

    Example:

    ```json
    {
      "_id": "658a63371f4a639b575bdc1a",
      "username": "User1",
      "email": "user1@gmail.com",
      "role": "customer",
      "avatar": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      "createdAt": "2023-12-26T05:23:03.272Z",
      "updatedAt": "2023-12-26T05:23:03.272Z",
      "__v": 0
    }
    ```

    **Note:** *Get the token from cookies named "access_token"*

  - Error: `400 Bad Request` || `401 Unauthorized` || `404 Not Found` || `500 Internal Server Error`

    Example:

    If there is an input is empty `400 Bad Request`:

    ```json
    {
      "success": false,
      "statusCode": 400,
      "message": "Please, fill all input!"
    }
    ```

    If email is invalid `400 Bad Request`:

    ```json
    {
      "success": false,
      "statusCode": 400,
      "message": "Invalid email!"
    }
    ```

    If password is wrong `401 Unauthorized`:

    ```json
    {
      "success": false,
      "statusCode": 401,
      "message": "Wrong password!"
    }
    ```

    If account is unregistered `404 Not Found`:

    ```json
    {
      "success": false,
      "statusCode": 404,
      "message": "User not found!"
    }
    ```

    If the server get an error `500 Internal Server Error`:

    ```json
    {
      "success": false,
      "statusCode": 500,
      "message": "Internal Server Error"
    }
    ```

### 3. **Logout User**

- Endpoint: `api/auth/logout`
- Method: `GET`
- Auth: NO
- Body: -
- Response:

  - Success: `200 OK`

    Example:

    ```json
    {
      "message": "User has been logout!"
    }
    ```

  - Error:`500 Internal Server Error`

    Example:

    If the server get an error `500 Internal Server Error`:

    ```json
    {
      "success": false,
      "statusCode": 500,
      "message": "Internal Server Error"
    }
    ```
