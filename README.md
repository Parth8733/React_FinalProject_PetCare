
# Group of 2 people
# Developers:

 - Name: Parth Patel
   Student Number: 200425734
 - Name: Samanta Silva dos Anjos 
  Student Number: 200418390

# Tasks:

# Samanta
-  Node Moongose: 
  -  API :  Create  
  -  API :  Index with authentication
  -  API :  Update with authentication
- React  :
  -  Booking :  Create <New>
  -  Booking :  Index <View your bookings>
  -  Booking :  Edit <Edti>
  
# Parth
- Node Moongose: 
  -  API : show with authentication  
  -  API :  destroy with authentication
- React  :
  -  Booking :  Edit <View your bookings>
  -  Booking :  Destroy <Cancel>

# User Authentication:
-  Provided by Shauwn on startes files


# What this application is about?
  - This is about a petshop website
  - it allows the users to create/Edit/Cancel And View your appointments"Bookings"
  - it has authentication method implemented 

 # Instructions?
  - Step 01- Register yourself
  - Step 02 - Go to bookings >
    - Click in New - Inform your data and click Submit
    - Click in Bookings to see the bookings you created
    - Click in Edit - Change the data and click Submit
    - Click in Bookings and on link Cancel if you want to cancel a booking


# Project Starter files

## Includes:

- API
  - User CRUD (Create, Read, Update, Delete)
  - Session Authentication
    - Passport Local strategy
    - Passport JWT strategy
  - Error handling
  - Mongoose configuration
  - All required node packages
    - dotenv
    - express
    - express-session
    - cors
    - mongoose
    - body-parser
    - jsonwebtoken
    - passport
    - passport-jwt
    - passport-local
    - passport-local-mongoose
- Client
  - User CRUD components
  - Authentication components
  - Shared navigation component
    - Helper for using React Router DOM Link component with React Bootstrap component
  - Global provider for across application variable store
  - Notification provider for across application message system
  - User provider for across application user access
  - All required node packages
    - axios
    - bootstrap
    - react
    - react-bootstrap
    - react-dom
    - react-router-dom
    - react-scripts
    - styled-components

---
## Installation

### API
```shell
npm install
```

> To run:
```shell
npm run dev
```

> Add your .env file with your Atlas Cloud MongoDB credentials
```json
DB_URI="mongodb+srv://comp-2068.efkcg.mongodb.net/<database name>?retryWrites=true&w=majority"
DB_USER="<database username>"
DB_PASS="<database password>"
```
> Replace **\<config option\>** with the corresponding data

### Client
```shell
yarn
```

> To run:
```shell
yarn start
```

> When you are ready to deploy you will need to build it first:
```shell
yarn build
```