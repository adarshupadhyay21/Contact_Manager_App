<h1>📇 Contact Manager App<h1></h1>

A back-end contact management application built using Node.js, Express.js, MongoDB, and JWT authentication. 
This app allows users to register, log in, and securely manage their contacts with authentication and authorization.

<h3>🚀 Features</h3>
<b>
  
✅ User Authentication (Signup, Login) using JWT tokens

✅ Protected Routes with JWT middleware

✅ CRUD Operations for managing contacts (Create, Read, Update, Delete)

✅ MongoDB Integration using Mongoose

✅ Password Hashing with bcrypt.js for security

✅ Error Handling for better API responses

✅ RESTful API following best practices</b>

<h3>🛠 Technologies Used</h3>

Node.js & Express.js – Backend framework

MongoDB & Mongoose – Database and ORM

JWT (JSON Web Token) – Authentication

bcrypt.js – Password hashing

dotenv – Environment variable management

Thunder Client– API testing

<h3>📌 Installation</h3>

Clone the repository:

```bash
git clone https://github.com/adarshupadhyay21/Contact_Manager_App.git
```
cd Contact_Manager_App


<h4>Install dependencies:</h4>

```bash
npm install
```

<h5>Set up the .env file:</h5>

<b>Create a .env file in the root directory and add the following variables:</b>

CONNECTION_STRING = your_mongodb_connection_string

ACCESS_TOKEN_SECRET = your_secret_key

PORT = 5001


Start the server:

```bash
npm start
```

>The API will be running in your localhost at: http://localhost:5001

📡 API Endpoints

<h2>📡 API Endpoints</h2>

<h3>🔹 Auth Routes</h3>
<pre>
  <code>
    POST   /api/auth/register      // Register a new user
    POST   /api/auth/login         // User login
    GET    /api/auth/current       // Get the current logged-in user (Protected)
  </code>
</pre>

<h3>🔹 Contact Routes (Protected)</h3>
<pre>
  <code>
    GET    /api/contacts           // Get all contacts
    POST   /api/contacts           // Add a new contact
    GET    /api/contacts/:id       // Get a contact by ID
    PUT    /api/contacts/:id       // Update a contact by ID
    DELETE /api/contacts/:id       // Delete a contact by ID
  </code>
</pre>



🤝 Contributing

Contributions are welcome! Feel free to fork this repository, make your changes, and open a pull request for any feature or bug fix.
