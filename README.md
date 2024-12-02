## Links

- [Live Link](https://ecommerce-2024-1baff.web.app/)
- [frontend github repository Link](https://github.com/kawsar334/GadgetBazaar)

- [Api Link]()





### Description
- GadgetBazaar isA modern e-commerce web app for tech products like mobiles, laptops, accessories, and MacBooks. Built with React, Tailwind CSS, Context API, Firebase Authentication, and React Router, featuring custom hooks and localStorage for seamless functionality

### Technologies Used
- Node.js: Fast and efficient JavaScript runtime for backend development.
- Express.js: Simplified request handling with middleware support.
- MongoDB: NoSQL database for managing user, product, and order data.
- JWT: For secure and stateless authentication.


### 3 Fundamental React Concepts Used in This Project
1. **Component-Based Architecture**: Organizes the UI into independent, reusable pieces.
2. **State Management**: Manages dynamic data within components.
3. **Props System**: Allows data passing between components for reusability.

###  Features Used in This Project
 **User Authentication**
- Secure login and registration using JWT (JSON Web Tokens).
- Password encryption with bcrypt.js for enhanced security.
- **Product Management:**

- Create, read, update, and delete products with category filtering.
 **Order Processing:**

- Endpoints to handle customer orders and their statuses.
 - **Scalable Database:**
- Built with MongoDB for efficient storage and querying of data.

**API Documentation:**
- Well-structured RESTful API endpoints for smooth integration with the frontend.



### Setup Instructions
**Prerequisites**
- Node.js installed (v14 or above).
- MongoDB database.
- Cloudinary account (for media uploads).
**Installation**
```bash 
    git clone https://github.com/kawsar334/GadgetBazaar_backend
```
Install dependencies:
```bash 
npm install

```

### Create a .env file in the root directory with the following variables:
```bash 
SECRETE=your secrete key

PORT=your_+port

MONGOURL=mongodb+srv://kawsar:kawsar@cluster0.dolgr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 
``` 

**Start the server:**
```bash
npm run dev

```


### API Endpoints
**Authentication**
- POST /api/auth/register: Register a new user.
- POST /api/auth/login: Log in and retrieve a JWT token.
**Products**
- GET /api/products: Fetch all products with optional filtering by 
**category.**
- POST /api/products: Add a new product (Admin only).
- PUT /api/products/:id: Update a product (Admin only).
- DELETE /api/products/:id: Delete a product (Admin only).
**Orders**
- POST /api/orders: Create a new order.
- GET /api/orders: Fetch user orders.

