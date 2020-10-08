require("dotenv").config();

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(process.env.SECRET_KEY);

// API SETUP

// APP CONFIG
const app = express();

// MIDDLEWARES
app.use(cors({ origin: true }));
app.use(express.json());

// API ROUTES
app.get("/", (request, response) => response.status(200).send("hello toren"));

app.post("/payments/create", async (request, response) => {
  // what we're sending from the front-end...
  const total = request.query.total;

  if (total <= 0) {
    console.log("invalid request");
  } else {
    // api call
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "gbp",
      receipt_email: email,
    });
    // ok created
    // send to front end
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  }
});

// LISTEN COMMAND
exports.api = functions.https.onRequest(app);

// example
// http://localhost:5001/crafty-bean-v2/us-central1/api
