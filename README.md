# device-tracker-node
Device Tracker is a demo of a Node/MongoDB CRUD application that tracks test devices. 

##Architecture
###Entry Point
Index.Js is entry point for starting the applications 
###Routes
This folder holds all of the routes for the application
###Models
The folder holds all of the models used for created and updating entries in the database
###Middleware
This folder holds the auth function for JWT validation


##Running
Clone the repo.
Run npm install inside where the package.json file is located to download the node modules needed.
Run npm run test to run the tests package (or where specified in the wdio.config.js file).
