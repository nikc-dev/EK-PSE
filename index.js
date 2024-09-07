require('dotenv').config()
const app = require('./app');
const { generateAccessToken } = require('./utils/getAccessToken');
const { PORT } = process.env;


// Generates a CURl that can be copied and used in Postman for your testing. 
// Please check the terminal for printed CURL to copy.
generateAccessToken().then(res => {
    // App instance starts to listen to the incoming requests
    app.listen(PORT, () => {
        console.log(`Server is up...`);
        console.log('\n');
        console.log(`Access Public API from - http://localhost:${PORT}/public - No Auth Required`);
        console.log('\n');
        console.log(`Access Secured API from - http://localhost:${PORT}/secured - Requires a valid Auth0 Access Token`);
        console.log('\n');
        console.log('\n');
        console.log(`Copy the below CURL and use postman to test the Secure API route. Uncheck authorization in postman header to test negative case after importing the curl`);
        console.log('\n');
        console.log('\n');
        console.log(`curl --request GET \
  --url http://localhost:8080/secured \
  --header 'authorization: Bearer ${res}'`);
    });
});

