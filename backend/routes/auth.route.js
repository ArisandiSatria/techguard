import express from 'express'

import {register, login, logout, forgotPassword, resetPassword} from "../controllers/auth.controller.js"

const route = express.Router()

route.post("/register", register)
route.post("/login", login)
route.get("/logout", logout)
route.post("/forgot-password", forgotPassword)
route.post("/reset-password/:id/:token", resetPassword)

export default route