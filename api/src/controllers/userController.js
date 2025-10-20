import { Router } from "express";
import userService from "../services/userService.js";

const userController = Router();

userController.post("/register", async (req, res) => {
    const { email, password } = req.body;

    const result = await userService.register({ email, password })

    res.status(201).json(result)
});

userController.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await userService.login({ email, password });
        res.status(201).json(result);
    } catch (error) {
        res.status(401).json({ message: error.message })
    }
})

userController.get("/logout", (req, res) => {
  //Invalidate token

  res.status(200).json({ok: true})
})

export default userController;