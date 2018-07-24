# users-api

As I am not familiar with REACT (I have used Angular 4), I have develped the backend apis that can be tested using POSTMAN. I am confident that I will pick up REACT quickly.

Autoscaling can be achieved by deploying this service as a docker container and using a  container orchestration software like kubernetes.

## Install

Download or clone the project and run 

 `npm install`

## Running the app

This app requires the local instance of mongoDB. 

Run following command to start app: 
 `npm start`

This will run the server listening on localhost:3000

It can be tested using the Postman.

Endpoints:
1. Create: POST
http://localhost:3000/submit
Headers: 
Content-Type: "application/x-www-form-urlencoded"
Body:
           key          value
          givenName      Sam
          surname       Fairfax
          email         sam.fairfax@fairfaxmedia.com.au
          phone         0292822833
          houseNumber   100
          street        Harris Street
          suburb        Pyrmont
          state         NSW
          postcode      2009
          country       Australia


2. Update: POST (get the _id value from the response of submit)
http://localhost:3000/update/:_id
http://localhost:3000/update/5b55c325d4b14d14285a338e
Headers: 
Content-Type: "application/x-www-form-urlencoded"
Body:
           key          value
          suburb        Newtown

3. Retrieve a user : GET
http://localhost:3000/:_id
http://localhost:3000/5b55c325d4b14d14285a338e


4. Unit Tests:
`npm test`