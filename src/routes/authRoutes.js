import express from "express";
const router = express.Router();

// Render login page
router.get("/login", (req, res) => {
  res.render("login", { title: "Login" });
});

// Render registration page
router.get("/register", (req, res) => {
  res.render("register", { title: "Register" });
});

export default router;
