import express from "express";
const router = express.Router();

// Define your application routes here
router.get("/applications", (req, res) => {
  res.render("applications", { title: "Applications" });
});

export default router;
