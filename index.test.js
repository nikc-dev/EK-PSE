const request = require("supertest");
const app = require("./app");
const { generateAccessToken } = require('./utils/getAccessToken');

describe("GET /public", () => {
    it("Should have acccess to /public API endpoint without Auth", async () => {
        process.env.AUTH0_ISSUER_BASE_URL = 'test';
        return request(app)
            .get("/public")
            .expect(200)
            .then((res) => {
                expect(res.statusCode).toBe(200);
            });
    });
});

describe("GET /secured", () => {
    it("Should NOT have acccess to /secured API endpoint without Auth", async () => {
        return request(app)
            .get("/secured")
            .expect(401)
            .then((res) => {
                expect(res.statusCode).toBe(401);
            });
    });

    it("should have access to /secured API endpoint with a valid Access Token", async () => {
        generateAccessToken().then(token => {
            return request(app)
                .get("/secured")
                .set('Authorization', `Bearer ${token}`)
                .expect(200)
                .then((res) => {
                    expect(res.body).toEqual({ data: 'Your Access-Token is authorized successfully to use this API endpoint' })
                    expect(res.statusCode).toBe(200);
                });
        });
    });
});