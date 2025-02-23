import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import user from "./routes/user.js";

const app=express();
app.use(cookieParser());

app.use(express.json());

const port = process.env.PORT || 8000;

app.use(
  cors({
    origin: ["http://localhost:5173","https://hoppscotch.io","https://capstone1-sigma.vercel.app"],
    methods: ["GET", "POST","DELETE","PUT"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/user", user);


app.get("/", function (_req,res) {
  res.send({ message: "Hello World" });
});

app.listen(port, () => {
  console.log("port running on port ", port);
});
