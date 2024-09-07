require('dotenv').config();
const { auth } = require('express-oauth2-jwt-bearer');

// Destructured imports of env varriables required for this file from .env
const {
    AUTH0_AUDIENCE,
    AUTH0_ISSUER_BASE_URL,
    AUTH0_TOKEN_SIGNING_ALG,
} = process.env;

/**
 * A middleware function that will check the incoming request for a valid Auth0 Access Token.
 */
const checkAuth = auth({
    audience: AUTH0_AUDIENCE,
    issuerBaseURL: AUTH0_ISSUER_BASE_URL,
    tokenSigningAlg: AUTH0_TOKEN_SIGNING_ALG
});

module.exports = checkAuth;
