🏡 ******Rentora – Full Stack Vacation Rental Booking Platform******

Rentora is a full-stack vacation rental booking platform inspired by Airbnb. It enables users to discover accommodations, manage property listings, save favorites, make secure bookings, and complete online payments through an intuitive and responsive interface.

✨ Features

🔐 Authentication & Authorization

- User Registration & Login
- Secure Session Management
- Protected Routes
- Authorization Controls

🏠 Property Management

- Create Listings
- Edit Listings
- Delete Listings
- Upload Property Images
- Manage Property Details

🔍 Property Discovery

- Browse Available Properties
- View Detailed Listings
- Interactive Map Integration
- Location-Based Search Experience

❤️ Wishlist

- Save Favorite Properties
- Manage Wishlist Collection

📅 Booking System

- Date-Based Reservations
- Dynamic Price Calculation
- GST-Based Pricing
- Booking Confirmation

💳 Payment Integration

- Secure Online Payments with Razorpay
- Booking Receipt Generation
- Transaction Tracking

⭐ Reviews & Ratings

- Add Reviews
- Rate Properties
- View User Feedback

📱 Responsive Design

- Optimized for Desktop, Tablet, and Mobile Devices

---

🛠️ Tech Stack

Frontend

- EJS
- HTML5
- CSS3
- JavaScript
- Bootstrap

Backend

- Node.js
- Express.js

Database

- MongoDB Atlas
- Mongoose

Authentication & Security

- Passport.js
- Express Session

Third-Party Services

- Cloudinary
- Mapbox
- Razorpay

---

📂 Project Structure

Rentora/
│
├── controllers/
├── init/
├── models/
├── public/
├── routes/
├── utils/
├── views/
│
├── .env
├── .gitignore
├── app.js
├── cloudConfig.js
├── middleware.js
├── schema.js
├── package.json
└── package-lock.json

---

🚀 Installation & Setup

Clone the Repository

git clone <repository-url>
cd Rentora

Install Dependencies

npm install

Configure Environment Variables

Create a ".env" file in the root directory:

# Cloudinary
CLOUD_NAME=
CLOUD_API_KEY=
CLOUD_API_SECRET=

# Mapbox
MAP_TOKEN=

# MongoDB Atlas
ATLASDB_URL=

# Razorpay
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=

Run the Application

node app.js

or

npm start

Open in Browser

http://localhost:8080

---

🌐 Live Demo

🔗 Live Website: https://rentora-laea.onrender.com

💻 GitHub Repository

🔗 Repository Link: https://github.com/Sucheta-Haldar0805/Rentora

---

**Key Highlights**

- Full-Stack Web Application
- MVC Architecture
- RESTful Routing
- Authentication & Authorization
- Cloud-Based Image Storage
- Interactive Maps Integration
- Secure Payment Processing
- Responsive User Interface
- Production Deployment
