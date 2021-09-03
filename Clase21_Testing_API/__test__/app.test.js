const supertest = require("supertest");
const {app, server} = require('../app');
const request = supertest(app);
const mongoose = require('mongoose');

describe("GET / ", () => {
    test("It should respond code 200", async () => {
      const response = await request.get("/api/products");
      expect(response.statusCode).toBe(200);
    });
    test("It should respond code 200", async () => {
      const response = await request.get("/api/products?id=2");
      expect(response.statusCode).toBe(200);
    });
  });
describe("POST / ", () => {
    test("It should respond code 201", async () => {
        const response = await request
        .post("/api/products")
        .send({

                "id": 45,
                "title": "Ti",
                "price": 22.3,
                "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
                "category": "men's clothing",
                "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
        })
        expect(201);
      });
  });

  afterAll(async () => {
    server.close()
    mongoose.connection.close();   
  });
  
  
