const express = require("express"); 
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user")
const authenticationRoute = require("./routes/authentication")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")
const cors = require('cors');
dotenv.config()

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

//Router to api
app.use(express.json());
app.use("/api/authentication" , authenticationRoute);
app.use("/api/users" , userRoute);
app.use("/api/products" , productRoute);
app.use("/api/order" , orderRoute);
app.use("/api/carts" , cartRoute);


const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));


app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
  })
