# Project1 - Sample Solution
RESTful API implementation of online store app.

## Project Description
Implement a RESTful Web Service for your online store.  The product and user data is stored on your company's local servers, and you will provide customers the ability to sign up for accounts, search products and place orders.

### Setting up the solution
1. MySQL set up: Create a MySQL database named **db_store_solution**. Create a db user with the following name and password: **springuser** and **ThePassword**. Assign this user to **db_store_solution** database. 
- See { spring tutorial } for database and user set up instructions

2. Populate database: Run the sql scripts from the repository into **db_store_solution** database to create and populate tables.

2. Once your database is ready, deploy the war file in you local Apache Tomcat server. If your deployment is successful and your database is configured and populated as described above, you are now ready to test the following REST APIs.

Base URL: ```http://localhost:8080/online-store-app/store/```

Append the corresponding REST API endpoint with this base url to make a call to that particular API.

**FYI, the following REST APIs use either query parameters or path parameter to send requests, irrespective of the nature of HTTP methods (e.g. GET, POST).**

#### REST API for user CRUD operation:

- create user 
```
Request: POST /customers?fname=Jane&lname=Doe&username=jdoe&email=jdoe@gmail.com
Response body: A string containing confirmation of user creation with Http Status code 200.
```

- update user
```
Request: PUT /customers?fname=Jane&lname=Austin&username=jdoe&email=jdoe@gmail.com
Response body: A string containing confirmation of update operation with Http Status code 200.
```

- delete user
```
Request: DELETE /customers/{username}
Response body: (empty), Http Status code 200 for successful deletion
```
- lookup user
```
Request: GET /customers/{username}
JSON Response body:
{
    "fname": "Jane",
    "lname": "Doe",
    "username": "jdoe",
    "email": "jdoe@gmail.com"
}
```
#### REST API for items:
- list all items
```
Request: GET /items
JSON Response body :
[
{
       "itemId": 107,
        "name": "Rose Cottage Girls' Hunter Green  Jacket Dress",
        "msrp": 20.0,
        "salePrice": 11.6,
        "upc": "048238056017",
        "shortDescription": "Paired with its' trendy jacket or worn alone, this dress will go anywhere in style.",
        "brandName": "Generic",
        "size": "16",
        "color": "Red",
        "gender": "Male"
},
{
       "itemId": 109,
        "name": "Blue Sweater",
        "msrp": 20.0,
        "salePrice": 11.6,
        "upc": "048238056019",
        "shortDescription": "Trendy sweater.",
        "brandName": "Generic",
        "size": "08",
        "color": "Blue",
        "gender": "Female"
}
]
```

- list items by keyword
```
Request: GET /items/search/{keyword}
JSON Response body:
[
{
       "itemId": 107,
        "name": "Rose Cottage Girls' Hunter Green  Jacket Dress",
        "msrp": 20.0,
        "salePrice": 11.6,
        "upc": "048238056017",
        "shortDescription": "Paired with its' trendy jacket or worn alone, this dress will go anywhere in style.",
        "brandName": "Generic",
        "size": "16",
        "color": "Red",
        "gender": "Male"
},
{
       "itemId": 109,
        "name": "Blue Sweater",
        "msrp": 20.0,
        "salePrice": 11.6,
        "upc": "048238056019",
        "shortDescription": "Trendy sweater.",
        "brandName": "Generic",
        "size": "08",
        "color": "Blue",
        "gender": "Female"
}
]
```

- list item by id
```
Request: GET /items/{id}
JSON Response body:
{
       "itemId": 107,
        "name": "Rose Cottage Girls' Hunter Green  Jacket Dress",
        "msrp": 20.0,
        "salePrice": 11.6,
        "upc": "048238056017",
        "shortDescription": "Paired with its' trendy jacket or worn alone, this dress will go anywhere in style.",
        "brandName": "Generic",
        "size": "16",
        "color": "Red",
        "gender": "Male"
}
```
#### Shopping cart related REST APIs
- add item to shoping cart (Hint: If no current cart exists for this user, create a cart first).
```
Request: POST /carts?productId=25&username=jdoe
Response body: HTTP 200 with a confirmation message in string
```

- show user's shopping cart
```
Request: GET /carts?username=jdoe
JSON Response body:
{
   "cartId": 2,
   "items":[
     {
      "productId":25,
      "productName": "Blue sweater",
      "msrp": 20.99,
      "salePrice": 15.99
     },
     {
      "productId":125,
      "productName": "Red sweater",
      "msrp": 20.99,
      "salePrice": 15.99
     }
   ]
}

```

- remove item from shopping cart
```
Request: DELETE /carts?cartId=2&productId=25
Response body: HTTP 200 with a confirmation message in string
```

- buy item (adjust shopping cart status and product list/count)
```
Request: PUT /carts/purchase/{cartId}
Response body: HTTP 200 with a confirmation message in string
```


- list users who bought a specific product
```
Request: GET /carts?productID=123
JSON Response body: 
[
{
"productId": 25,
"username": "jovi"
},
{
"productId": 25,
"username": "jdoe"
}
]
```



