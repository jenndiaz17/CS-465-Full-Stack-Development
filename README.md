# Travlr Getaways Full Stack Application

## **Architecture**

In this project, I used two types of frontend development approaches. On the customer side, the app used static HTML and JavaScript rendered through Express.js. This allowed for quick development of server-rendered pages. On the administrative side, I used Angular to create a full single-page application (SPA). The SPA provided a smoother, more dynamic experience by updating content without reloading the page, which was especially useful for managing trips and editing forms in real time. On the backend, I chose to use a NoSQL MongoDB database because of its flexibility and scalability. MongoDB is ideal for storing dynamic, schema-less data like trip information and user accounts. Its JSON-like structure also makes it easy to work with when transferring data between the frontend and backend.
  #### app_admin (Frontend)
  
  This folder contains the Angular single-page application (SPA).
  - Displays trip data and admin tools
  - Calls RESTful APIs from the Express backend
  - Includes reusable UI components and routing
  
  - #### app_api (Backend)
  
  This folder contains the Express.js backend for the application.
  - Uses MongoDB with Mongoose
  - Implements JWT-based admin authentication
  - Contains routes, controllers, models, and middleware

#### Security (Authentication System)

This part of the project handles secure login and route protection for the admin panel.
- Implements JSON Web Token (JWT) authentication
- Uses bcrypt to hash and verify passwords
- Protects backend routes to allow access only to logged-in admins
- Integrated into the Express API via middleware (e.g., `authenticateJWT.js`)

## **Functionality**

JSON stands for JavaScript Object Notation. It's a simple way to store and share data. Even though it looks like JavaScript, it’s just a format for data—it doesn’t run any code. JSON is often used to send information between the back end and front end. For example, when the website needs to show trip details, it gets that data from the server in JSON format and then displays it in the Angular app .While working on the project, I cleaned up the code to make it run better and be easier to manage. One thing I did was create reusable Angular components for trip cards and forms. This helped keep the design neat and saved time because I didn’t have to write the same code over and over. These reusable parts also make it easier to update or add new features later on. 
To make sure the functionality worked as expected, I tested how JSON data was being sent and received. I used browser DevTools and Angular service logging to verify that the data fetched from the Express backend was correctly formatted and displayed in the Angular components. I also checked that the reusable components properly updated when new data was passed in. This helped confirm that both the frontend and backend were communicating smoothly using JSON.

## **Testing**

Testing API endpoints involved verifying GET, POST, PUT, and DELETE operations, both with and without security in place. With security added (using JWT for admin login), testing became more complex because requests required valid tokens. I used browser DevTools to inspect requests and made sure the Authorization header was set properly. I also tested error handling to confirm unauthorized users were blocked from admin functions. Understanding how routes and methods interact helped ensure a secure and functional API.
For example, one of the secured routes in my backend is used to add a new trip:
js
// In app_api/routes/trips.js or similar
router.post('/trips', authenticateJWT, tripsController.tripsCreate);
This route uses the authenticateJWT middleware to check if the request includes a valid JWT token. During testing, I used Postman and browser DevTools to send a POST request with and without the Authorization header. If the token was missing or invalid, the server responded with a 401 Unauthorized error. If the token was valid, the trip was successfully added and a confirmation message was returned. This confirmed that my route protection and token handling worked as expected.

Example from backend codes: One example of testing functionality was with the `/trips` route, which is protected by JWT. In `trips.js`, the route is defined like this:

js
router.post('/trips', authenticateJWT, tripsController.tripsCreate); ![image](https://github.com/user-attachments/assets/40cba72e-148e-468f-8dfa-f0fab26f210d) 
![image](https://github.com/user-attachments/assets/48807f74-4991-4213-9fcf-5e9d1174d862)

## **Reflection**

This course has helped me grow both technically and professionally, giving me the hands-on experience I needed to prepare for a career in web development. Learning to build and secure a full stack web application gave me real-world skills that I can apply in a professional setting. I now feel confident working with RESTful APIs, implementing secure login systems, managing NoSQL databases, and creating dynamic user interfaces using Angular. These are core skills in modern web development, and completing this project has made me feel more prepared and marketable as I pursue opportunities in the tech industry.	






  
