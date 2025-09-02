

import express from "express";
import jwt from "jsonwebtoken";
import { z } from "zod";
import { JWT_SECRET } from "./config";
import { middleware } from "./middleware";




const app = express();
app.use(express.json());


const userSchema = z.object({
    username: z.string().min(6).max(20, "Username must be between 6 and 20 characters"),
    password: z.string().min(8).max(30, "Password must be between 8 and 30 characters"),
});

app.post("/signup", (req, res) => {
    const result = userSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
        errors: result.error.errors, // detailed error messages
        });
  }

  const user = result.data;
  res.json({
    message: "User created successfully",
    user: user
  })
})


app.post("/signin", (req, res) => {
    const result = userSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
        errors: result.error.errors, // detailed error messages
        });
    }

    const userId = 1;
    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        token: token
    })
})


app.post("/room", middleware, (req, res) => {
    // db call

    res.json({
        roomId: 123
    })
})

app.listen(3001);



