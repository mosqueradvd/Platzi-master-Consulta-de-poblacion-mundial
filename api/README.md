#  Platzi-master-backend-poblacion

This is the Backend structure for the app to consult data from world population.

If you clone this project you'll have to install all dependencies using

`npm run install`

For running the project you'll have to run the command
`npm run start`

The commando for development is:
`npm run dev`

The project has this structure:

 - ***/routes:*** For each entity we have a file for the routes. This file depends on the controller of the entity
 - ***/controller:*** Here are the functions for each route. Each file represents the functions for an entity
 - ***/lib:*** Here is the functions to connect to the database.
 - ***/config:*** Here are the environment variables
 - ***/models:*** Here are the schemas for the database for each entity.



> Written with [StackEdit](https://stackedit.io/).