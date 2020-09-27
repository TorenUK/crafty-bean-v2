const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HCr8zGrO8LMr0aUdfvQs8AZEh2AJGmLV8IpPkreynZyberb6MooHWmjIyNiSrS82IDKygDKma4fJHO9hwUrf9i900aALre3Az"
);

// API SETUP

// APP CONFIG
const app = express();

// MIDDLEWARES
app.use(cors({ origin: true }));
app.use(express.json());

// API ROUTES
app.get("/", (request, response) => response.status(200).send("hello toren"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("PAYMENT REQUEST RECIEVED FOR ------>>>>>>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "gbp",
  });
  // ok created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// LISTEN COMMAND
exports.api = functions.https.onRequest(app);

// example
// http://localhost:5001/crafty-bean-v2/us-central1/api
