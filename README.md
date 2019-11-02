## NodeJS CRUD Installation Instructions

1. Download NodeJS from the link https://nodejs.org/en/ as per your system.
2. clone the repo and navigate to root directory.
3. Execute the command `npm install --save` to download the npm packages.
4. copy .env.example and rename to .env .
5. Add URL of your Mongo db to MONGODB_URI in .env .
6. Sign up at https://mlab.com/ to HOST Mongo DB by using free tier of upto 500MB.
7. After all changes execute the command `node app.js` to run application.
8. The project will be up and running if everything configured correctly.
9. Available CRUD routes are
-- POST http://localhost:1234/products/create {"name" : "Apple", "price" : "20"}
-- GET http://localhost:1234/products/{:id}
-- PUT http://localhost:1234/products/{:id}/update {"name" : "Apple", "price" : "20"}
-- DELETE http://localhost:1234/products/{:id}/delete
