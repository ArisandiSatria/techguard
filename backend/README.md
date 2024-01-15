# **RESTful API - Coding Studio Academy Final Project**

By: Arisandi Satria Jeujanan

API Link : _https://coding-studio-fp.vercel.app/_

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

    **Note:** _Get the token from cookies named "access_token"_

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

### 4. **Add Product**

- Endpoint: `api/product/add-product`
- Method: `POST`
- Auth: YES
- Body:

  ```json
  {
    "category": "String",
    "name": "String",
    "image": "String",
    "description": "String",
    "spesification": [],
    "note": "String",
    "packages": ["String", "specifications": []]
  }
  ```

  Example:

  ```json
  {
    "category": "fingerprint-attendance",
    "name": "Fingerspotafsadfdasf",
    "image": "asdfadfasf",
    "description": "Revadfadfasdfafo",
    "spesification": [],
    "note": "",
    "packages": []
  }
  ```

- Response:

  - Success: `201 Created`

    Example:

    ```json
    {
      "category": "fingerprint-attendance",
      "name": "Fingeradfasfsd",
      "image": "1234",
      "description": "adafsda4312",
      "specifications": [],
      "note": "",
      "packages": [],
      "_id": "659152c0ce9843c0acb1077a",
      "createdAt": "2023-12-31T11:38:40.372Z",
      "updatedAt": "2023-12-31T11:38:40.372Z",
      "__v": 0
    }
    ```

  - Error: `400 Bad Request` || `500 Internal Server Error`

    Example:

    If there is empty input `400 Bad Request`:

    ```json
    {
      "success": false,
      "statusCode": 400,
      "message": "Please, fill all input!"
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

### 5. **Edit Product**

- Endpoint: `api/product/edit-product/:id`
- Method: `POST`
- Auth: YES
- Body:

  ```json
  {
    "category": "String",
    "name": "String",
    "image": "String",
    "description": "String",
    "spesification": [],
    "note": "String",
    "packages": ["String", "specifications": []]
  }
  ```

  Example:

  ```json
  {
    "category": "fingerprint-attendance",
    "name": "qwertyuiop",
    "image": "qwertyuiop",
    "description": "qwertyuiop.",
    "spesification": [],
    "note": "",
    "packages": []
  }
  ```

- Response:

  - Success: `201 Created`

    Example:

    ```json
    {
      "_id": "65924da5a2638e55bcc04be2",
      "category": "fingerprint-attendance",
      "name": "qwertyuiop",
      "image": "qwertyuiop",
      "description": "qwertyuiop.",
      "specifications": [],
      "note": "",
      "packages": [],
      "createdAt": "2024-01-01T05:29:09.890Z",
      "updatedAt": "2024-01-01T05:36:56.906Z",
      "__v": 0
    }
    ```

  - Error: `400 Bad Request` || `404 Not Found` || `500 Internal Server Error`

    Example:

    If there is empty input `400 Bad Request`:

    ```json
    {
      "success": false,
      "statusCode": 400,
      "message": "Please, fill all input!"
    }
    ```

    If can't find product `404 Not Found`:

    ```json
    {
      "success": false,
      "statusCode": 404,
      "message": "Product not found!"
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

### 6. **Delete Product**

- Endpoint: `api/product/delete-product/:id`
- Method: `DELETE`
- Auth: YES
- Body: -

- Response:

  - Success: `200 Ok`

    Example:

    ```json
    {
      "message": "{product-name} has been deleted!"
    }
    ```

  - Error: `404 Not Found` || `500 Internal Server Error`

    Example:

    If can't find product `404 Not Found`:

    ```json
    {
      "success": false,
      "statusCode": 404,
      "message": "Product not found!"
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

### 7. **Get All Products**

- Endpoint: `api/product/`
- Method: `GET`
- Auth: NO
- Body: -

- Response:

  - Success: `200 Ok`

    Example:

    ```json
    [
      {
        "_id": "658d00027314b533c2d3f0bc",
        "category": "fingerprint-attendance",
        "name": "Fingerspot Revo W-230N",
        "image": "asdf",
        "description": "Revo W-230N adalah mesin absensi sidik jari koneksi WiFi Fingerspot terbaru. Akses data lebih praktis tanpa mengatur kabel jaringan. Selain itu, mendukung Absensi Online untuk mengelola data absensi lebih mudah dari mana saja.",
        "specifications": [],
        "note": "",
        "packages": [],
        "createdAt": "2023-12-28T04:56:34.190Z",
        "updatedAt": "2023-12-28T04:56:34.190Z",
        "__v": 0
      },
      {
        "_id": "658d00637314b533c2d3f0bf",
        "category": "fingerprint-attendance",
        "name": "Solution P207",
        "image": "asdf",
        "description": "Mesin Absensi Solution P208 dirancang khusus dengan Teknologi SSR Function, yaitu Pengaturan Jadwal Kerja bisa langsung dilakukan di mesin sampai dengan pengolahan data dan Export Laporan Kehadiran. Mesin ini juga sudah dilengkapi dengan Layar TFT LCD Full Color dan USB Cable untuk koneksi ke software serta Port USB Disk untuk penarikan data dengan Flash Disk tentunya. Mesin ini dilengkapi Bracket agar dapat ditempel dinding dengan lebih kuat dan aman. Dapatkan penawaran terbaik dari kami sekarang juga.",
        "specifications": [],
        "note": "",
        "packages": [],
        "createdAt": "2023-12-28T04:58:11.725Z",
        "updatedAt": "2023-12-28T04:58:11.725Z",
        "__v": 0
      },
      {
        "_id": "658d00787314b533c2d3f0c1",
        "category": "fingerprint-attendance",
        "name": "Fingerspot Revo WDV 204BNC",
        "image": "asdffdsa",
        "description": "Revo WDV-204BNC adalah mesin absensi Telapak Tangan (Vein Scanning) dan Sidik Jari yang lebih ekonomis. Mendukung Absensi Online sekaligus bisa digunakan sebagai akses kontrol atau buka pintu. Mesin ini juga dilengkapi dengan koneksi WiFi untuk kemudahan instalasi tanpa kabel jaringan. Tersedia sensor telapak tangan (Vein Scanning)) memberikan pilihan absensi kehadiran lebih higienis dengan penggunaan tanpa sentuh mesin dan lebih praktis.",
        "specifications": [],
        "note": "",
        "packages": [],
        "createdAt": "2023-12-28T04:58:32.084Z",
        "updatedAt": "2023-12-28T05:10:57.926Z",
        "__v": 0
      }
    ]
    ```

  - Error: `500 Internal Server Error`

    Example:

    If the server get an error `500 Internal Server Error`:

    ```json
    {
      "success": false,
      "statusCode": 500,
      "message": "Internal server error!"
    }
    ```

### 8. **Get Product**

- Endpoint: `api/product/:category`
- Method: `GET`
- Auth: NO
- Body: -

- Response:

  - Success: `200 Ok`

    Example:

    ```json
    [
      {
        "_id": "658d00027314b533c2d3f0bc",
        "category": "fingerprint-attendance",
        "name": "Fingerspot Revo W-230N",
        "image": "asdf",
        "description": "Revo W-230N adalah mesin absensi sidik jari koneksi WiFi Fingerspot terbaru. Akses data lebih praktis tanpa mengatur kabel jaringan. Selain itu, mendukung Absensi Online untuk mengelola data absensi lebih mudah dari mana saja.",
        "specifications": [],
        "note": "",
        "packages": [],
        "createdAt": "2023-12-28T04:56:34.190Z",
        "updatedAt": "2023-12-28T04:56:34.190Z",
        "__v": 0
      },
      {
        "_id": "658d00637314b533c2d3f0bf",
        "category": "fingerprint-attendance",
        "name": "Solution P207",
        "image": "asdf",
        "description": "Mesin Absensi Solution P208 dirancang khusus dengan Teknologi SSR Function, yaitu Pengaturan Jadwal Kerja bisa langsung dilakukan di mesin sampai dengan pengolahan data dan Export Laporan Kehadiran. Mesin ini juga sudah dilengkapi dengan Layar TFT LCD Full Color dan USB Cable untuk koneksi ke software serta Port USB Disk untuk penarikan data dengan Flash Disk tentunya. Mesin ini dilengkapi Bracket agar dapat ditempel dinding dengan lebih kuat dan aman. Dapatkan penawaran terbaik dari kami sekarang juga.",
        "specifications": [],
        "note": "",
        "packages": [],
        "createdAt": "2023-12-28T04:58:11.725Z",
        "updatedAt": "2023-12-28T04:58:11.725Z",
        "__v": 0
      },
      {
        "_id": "658d00787314b533c2d3f0c1",
        "category": "fingerprint-attendance",
        "name": "Fingerspot Revo WDV 204BNC",
        "image": "asdffdsa",
        "description": "Revo WDV-204BNC adalah mesin absensi Telapak Tangan (Vein Scanning) dan Sidik Jari yang lebih ekonomis. Mendukung Absensi Online sekaligus bisa digunakan sebagai akses kontrol atau buka pintu. Mesin ini juga dilengkapi dengan koneksi WiFi untuk kemudahan instalasi tanpa kabel jaringan. Tersedia sensor telapak tangan (Vein Scanning)) memberikan pilihan absensi kehadiran lebih higienis dengan penggunaan tanpa sentuh mesin dan lebih praktis.",
        "specifications": [],
        "note": "",
        "packages": [],
        "createdAt": "2023-12-28T04:58:32.084Z",
        "updatedAt": "2023-12-28T05:10:57.926Z",
        "__v": 0
      }
    ]
    ```

  - Error: `500 Internal Server Error`

    Example:

    If the server get an error `500 Internal Server Error`:

    ```json
    {
      "success": false,
      "statusCode": 500,
      "message": "Internal server error!"
    }
    ```

### 9. **Get Product Detail**

- Endpoint: `api/product/:category/:id`
- Method: `GET`
- Auth: NO
- Body: -

- Response:

  - Success: `200 Ok`

    Example:

    ```json
    {
      "_id": "658d00637314b533c2d3f0bf",
      "category": "fingerprint-attendance",
      "name": "Solution P207",
      "image": "asdf",
      "description": "Mesin Absensi Solution P208 dirancang khusus dengan Teknologi SSR Function, yaitu Pengaturan Jadwal Kerja bisa langsung dilakukan di mesin sampai dengan pengolahan data dan Export Laporan Kehadiran. Mesin ini juga sudah dilengkapi dengan Layar TFT LCD Full Color dan USB Cable untuk koneksi ke software serta Port USB Disk untuk penarikan data dengan Flash Disk tentunya. Mesin ini dilengkapi Bracket agar dapat ditempel dinding dengan lebih kuat dan aman. Dapatkan penawaran terbaik dari kami sekarang juga.",
      "specifications": [],
      "note": "",
      "packages": [],
      "createdAt": "2023-12-28T04:58:11.725Z",
      "updatedAt": "2023-12-28T04:58:11.725Z",
      "__v": 0
    }
    ```

  - Error: `404 Not Found` || `500 Internal Server Error`

    Example:

    If can't find product `404 Not Found`:

    ```json
    {
      "success": false,
      "statusCode": 404,
      "message": "Product not found!"
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

### 10. **Forgot Password**

- Endpoint: `api/auth/forgot-password`
- Method: `POST`
- Auth: NO
- Body:

  ```json
  {
    "email": "string"
  }
  ```

  Example:

  ```json
  {
    "email": "user2@gmail.com"
  }
  ```

- Response:

  - Success: `200 Ok`

    Example:

    ```json
    {
      "message": "Email sent!"
    }
    ```

  - Error: `404 Not Found` || `500 Internal Server Error`

    Example:

    If can't find user `404 Not Found`:

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
      "message": "Internal server error!"
    }
    ```

### 11. **Add Order**

- Endpoint: `api/order/add-order`
- Method: `POST`
- Auth: YES
- Body:

  ```json
  {
    "userRef": "string",
    "items": [
      {
        "product": "string",
        "productImage": "string",
        "quantity": "number"
      },
      {
        "product": "string",
        "productImage": "string",
        "quantity": "number"
      }
    ],
    "totalPrice": "number",
    "status": "string"
  }
  ```

  Example:

  ```json
  {
    "userRef": "6596a9195ebf714a604224e8",
    "items": [
      {
        "product": "GTX-310",
        "productImage": "asdf",
        "quantity": 2
      },
      {
        "product": "INT-1000",
        "productImage": "asdf",
        "quantity": 2
      }
    ],
    "totalPrice": 2000000,
    "status": "processing"
  }
  ```

- Response:

  - Success: `201 Created`

    Example:

    ```json
    {
      "userRef": "6596a9195ebf714a604224e8",
      "items": [
        {
          "product": "CRA-200",
          "productImage": "asdf",
          "quantity": 1,
          "_id": "65a53547406c7d97915b0b64"
        }
      ],
      "totalPrice": 4000000,
      "status": "processing",
      "_id": "65a53547406c7d97915b0b63",
      "createdAt": "2024-01-15T13:38:15.560Z",
      "updatedAt": "2024-01-15T13:38:15.560Z",
      "__v": 0
    }
    ```

  - Error: `401 Unauthorized` || `500 Internal Server Error`

    Example:

    If can't find user `401 Unauthorized`:

    ```json
    {
      "success": false,
      "statusCode": 404,
      "message": "Unauthorized!"
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

### 12. **Edit Order**

- Endpoint: `api/order/edit-order/:id"`
- Method: `POST`
- Auth: YES
- Body:

  ```json
  {
    "userRef": "string",
    "items": [
      {
        "product": "string",
        "productImage": "string",
        "quantity": "number"
      }
    ],
    "totalPrice": "number",
    "status": "string"
  }
  ```

  Example:

  ```json
  {
    "userRef": "6596a9195ebf714a604224e8",
    "items": [
      {
        "product": "CRA-200",
        "productImage": "asdf",
        "quantity": 1
      }
    ],
    "totalPrice": 4000000,
    "status": "cancelled"
  }
  ```

- Response:

  - Success: `200 Ok`

    Example:

    ```json
    {
      "_id": "65a53547406c7d97915b0b63",
      "userRef": "6596a9195ebf714a604224e8",
      "items": [
        {
          "product": "CRA-200",
          "productImage": "asdf",
          "quantity": 1,
          "_id": "65a535f3406c7d97915b0b69"
        }
      ],
      "totalPrice": 4000000,
      "status": "cancelled",
      "createdAt": "2024-01-15T13:38:15.560Z",
      "updatedAt": "2024-01-15T13:41:07.790Z",
      "__v": 0
    }
    ```

  - Error: `401 Unauthorized` || `500 Internal Server Error`

    Example:

    If can't find user `401 Unauthorized`:

    ```json
    {
      "success": false,
      "statusCode": 404,
      "message": "Unauthorized!"
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

### 13. **Get Orders**

- Endpoint: `api/order/get-orders"`
- Method: `POST`
- Auth: YES
- Body: -

- Response:

  - Success: `200 Ok`

    Example:

    ```json
    [
      {
        "_id": "65a4ac6e4e6fb05d5355ca38",
        "userRef": "6596a9195ebf714a604224e8",
        "items": [
          {
            "product": "MX-350",
            "productImage": "asdf",
            "quantity": 3,
            "_id": "65a4ac6e4e6fb05d5355ca39"
          },
          {
            "product": "SF-100",
            "productImage": "asdf",
            "quantity": 4,
            "_id": "65a4ac6e4e6fb05d5355ca3a"
          },
          {
            "product": "AMD-3500",
            "productImage": "asdf",
            "quantity": 2,
            "_id": "65a4ac6e4e6fb05d5355ca3b"
          }
        ],
        "totalPrice": 3500000,
        "status": "processing",
        "createdAt": "2024-01-15T03:54:22.470Z",
        "updatedAt": "2024-01-15T03:54:22.470Z",
        "__v": 0
      },
      {
        "_id": "65a4ace38f065eaf7440885a",
        "userRef": "6596a9195ebf714a604224e8",
        "items": [
          {
            "product": "TR-50",
            "productImage": "asdf",
            "quantity": 1,
            "_id": "65a4ace38f065eaf7440885b"
          }
        ],
        "totalPrice": 1000000,
        "status": "processing",
        "createdAt": "2024-01-15T03:56:19.950Z",
        "updatedAt": "2024-01-15T03:56:19.950Z",
        "__v": 0
      },
      {
        "_id": "65a4ad2bd9804b43f7441ea5",
        "userRef": "6596a9195ebf714a604224e8",
        "items": [
          {
            "product": "GTX-310",
            "productImage": "asdf",
            "quantity": 2,
            "_id": "65a4ad2bd9804b43f7441ea6"
          },
          {
            "product": "INT-1000",
            "productImage": "asdf",
            "quantity": 2,
            "_id": "65a4ad2bd9804b43f7441ea7"
          }
        ],
        "totalPrice": 2000000,
        "status": "completed",
        "createdAt": "2024-01-15T03:57:31.830Z",
        "updatedAt": "2024-01-15T04:00:34.283Z",
        "__v": 0
      },
      {
        "_id": "65a53547406c7d97915b0b63",
        "userRef": "6596a9195ebf714a604224e8",
        "items": [
          {
            "product": "CRA-200",
            "productImage": "asdf",
            "quantity": 1,
            "_id": "65a535f3406c7d97915b0b69"
          }
        ],
        "totalPrice": 4000000,
        "status": "cancelled",
        "createdAt": "2024-01-15T13:38:15.560Z",
        "updatedAt": "2024-01-15T13:41:07.790Z",
        "__v": 0
      }
    ]
    ```

  - Error: `401 Unauthorized` || `500 Internal Server Error`

    Example:

    If can't find user `401 Unauthorized`:

    ```json
    {
      "success": false,
      "statusCode": 404,
      "message": "Unauthorized!"
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

### 14. **Get Order Detail**

- Endpoint: `api/order/get-order/:id"`
- Method: `POST`
- Auth: YES
- Body: -

- Response:

  - Success: `200 Ok`

    Example:

    ```json
    {
      "_id": "65a4ad2bd9804b43f7441ea5",
      "userRef": "6596a9195ebf714a604224e8",
      "items": [
        {
          "product": "GTX-310",
          "productImage": "asdf",
          "quantity": 2,
          "_id": "65a4ad2bd9804b43f7441ea6"
        },
        {
          "product": "INT-1000",
          "productImage": "asdf",
          "quantity": 2,
          "_id": "65a4ad2bd9804b43f7441ea7"
        }
      ],
      "totalPrice": 2000000,
      "status": "completed",
      "createdAt": "2024-01-15T03:57:31.830Z",
      "updatedAt": "2024-01-15T04:00:34.283Z",
      "__v": 0
    }
    ```

  - Error: `401 Unauthorized` || `500 Internal Server Error`

    Example:

    If can't find user `401 Unauthorized`:

    ```json
    {
      "success": false,
      "statusCode": 404,
      "message": "Unauthorized!"
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
