import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  const recruiter = { name: "John Doe" }; // Example recruiter data
  const jobs = [
    { id: 1, title: "Software Engineer" },
    { id: 2, title: "Data Scientist" },
    { id: 3, title: "Product Manager" },
  ]; // Example job listings

  res.render("home", { recruiter, jobs });
});

export default router;