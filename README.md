# Node API using Auth0 Token for M2M

This is a simple application with two API end points (/public and /secured) that can be invoked from postman etc. 
/public is a public API endpoint that is accessible without any authorization. 
/secured is an Auth0 protected API endpoint and a valid Auth0 access token has to be passed in the Authorization header for it to be accessible. 

## Installation
Clone the repo into your local machine and open the project in your favorite IDE like VisualStudioCode etc. Make sure you have the latest NodeJS version installed. In your terminal (Bash / Powershell etc) cd into the project and checkout master branch and run the below command to install. 
Use the npm package manager to install this app.

```bash
npm install
```

## Usage

After checking out to master branch (*important) and finishing the installation as per above step, run the below command to start the application. 
```bash
npm run start
```

Once the appication is running, it will print some simple instruction in your terminal to use the app along with a CURL that can be copied to hit the API endpoint, with a pre-generated Auth0 Aceess Token for your convenince. Feel free to modify this token from postman to test negative cases, only valid token will allow you to access the /secured endpoint. 

## Testing

This entire application is covered with unit test written using Jest and Supertest with 90% code coverage as well. 
To check the test cases and code coverage, run the below command in your terminal within the project path.
```bash
npm run test
```

Thanks for taking time to checkout this project
