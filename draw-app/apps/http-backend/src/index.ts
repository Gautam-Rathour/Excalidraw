

import express from "express";
import jwt from "jsonwebtoken";
import { z } from "zod";
import { JWT_SECRET } from '@repo/backend-common/config';
import { middleware } from "./middleware";
import { CreateUserSchema, SigninSchema, CreateRoomSchema } from "@repo/common/types";




const app = express();
app.use(express.json());



app.post("/signup", (req, res) => {
    
    const data = CreateUserSchema.safeParse(req.body);
    if(!data.success) {
        res.json({
            message: "Incorrect inputs"
        })
    }
    //db call
    res.json({
        message: "User created successfully",
        userId: "123"
    })

})


app.post("/signin", (req, res) => {
    const data = SigninSchema.safeParse(req.body);

    if (!data.success) {
        res.json({
            message: "Incorrect inputs" // detailed error messages
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

    const data = CreateRoomSchema.safeParse(req.body);

    if (!data.success) {
        res.json({
            message: "Incorrect inputs" // detailed error messages
        });
    }

    // db call

    res.json({
        roomId: 123
    })
})

app.listen(3001);



