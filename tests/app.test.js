const request = require("supertest");
const { app, server } = require("../index");

afterAll(() => server.close());

test("GET / zwraca 200", async () => {
  const res = await request(app).get("/");
  expect(res.statusCode).toBe(200);
});
