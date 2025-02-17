# Express Counter

In this exercise we will build a simple counter API using express.

## Learning Objectives

- Explain how to set up and run an Express application
- Build a simple Express API and send a HTTP request to an available endpoint using a HTTP client
- Explain that JSON is a widely-used language-agnostic format for encoding data as attribute value pairs
- Diagram the request and response cycle for an Express API.
- Use console.log() and read the result in the server logs

## Express Setup
To set up a new express application, in an empty folder follow these steps.

1. Initialize npm. You can accept all the defaults.
```
npm init
```

2. Install the [express](https://expressjs.com/)  library
```
npm install express
```

3. Install [nodemon](https://www.npmjs.com/package/nodemon). nodemon is a utility that will automatically restart our express server any time we change code.
```
npm install --save-dev nodemon
```

4. Install the [morgan](https://expressjs.com/en/resources/middleware/morgan.html) middleware. Express middleware allows us to extend express with additional functionality. Morgan is express middleware we can use to have our server automatically log all requests. This helps gives us visibility of what our server is doing.
```
npm install morgan
```

5. Install the [cors](https://expressjs.com/en/resources/middleware/cors.html) middleware. This allows us to make HTTP requests to our API using fetch from the browser.
```
npm install cors
```

6. Create our `index.js` file. This is our *entrypoint* - the source file that will start running our server.

```javascript
//Include the express library
const express = require("express")
//Include the morgan middleware
const morgan = require("morgan")
//Include the cors middleware
const cors = require("cors")

//Create a new express application
const app = express()

//Tell express we want to use the morgan library
app.use(morgan("dev"))
//Tell express we want to use the cors library
app.use(cors())
//Tell express to parse JSON in the request body
app.use(express.json())

//Start up our server
const port = 3030
app.listen(port, () => {
 console.log(`Server is running on http://localhost:${port}/`)
})

```

7. Update your `package.json` file and replace the `"scripts"` section with the following:

```json
"scripts": {
   "start" : "nodemon index.js"
},
```

8. Finally, start up our server!
```
npm start
```

Our servers is now running and *listening* for HTTP requests.

## Instructions

Your application should maintain a simple numeric counter and provide the endpoints detailed in the [API Spec](https://boolean-uk.github.io/api-express-counter/).

Each route should be detailed in a sequence diagram in the same way you did during the API address book exercise.

Test each route using:
- `fetch`
- `curl`
- An API testing tool such as postman or insomnia

## Extension 1
Add a route as detailed in the [API Spec Extension 1](https://boolean-uk.github.io/api-express-counter/#tag/extension-1). For example, making a PUT request to `/counter?value=20` should set the value of the counter to 20. Use the `req.query` property in your callback to get the value provided. See the [express documentation](https://expressjs.com/en/api.html#req.query). If no value is provided, the counter should not be changed.

## Extension 2
Using [route parameters](https://expressjs.com/en/guide/routing.html), update your API to keep track of multiple counters. Allow the client to specify the counter name as part of the URL. With this in mind, build the endpoints as detailed in the [API Spec Extension 2](https://boolean-uk.github.io/api-express-counter/#tag/extension-2).
