const generateAccessToken = async () => {
    // This below snippet is to get the Access Token from Auth0 to create a CURL for your testing, request below is copy pasted from Auth0 site, hence values not stored in .env file. 

    const res = await fetch("https://dev-7qvqazg4jtezz0qu.us.auth0.com/oauth/token", {
        method: "POST",
        body: JSON.stringify({
            client_id: "CC2Lx4u3i04FUNaPbTdkui0AC9k4tvIw",
            client_secret: "Z8WCs5qJ-eRSRc4dMcr07DcUq3vkQ71lMIVZoSaugOdYAfuMaaUpTlU5mocO7xq9",
            audience: "https://machine-auth-api.com",
            grant_type: "client_credentials"
        }),
        headers: { 'content-type': 'application/json' },
    }).then(res => {return res.json()});
    return res.access_token;
}


module.exports = { generateAccessToken };