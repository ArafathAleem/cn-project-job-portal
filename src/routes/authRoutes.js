import express from "express";
const router = express.Router();

// Define your authentication routes here
router.get("/register", (req, res) => {
  res.render("register", { title: "Register" });
});

router.get("/login", (req, res) => {
  res.render("login", { title: "Login" });
});

export default router;
