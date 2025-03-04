import express from "express";
const router = express.Router();

// Render all jobs
router.get("/", (req, res) => {
  const jobs = [
    { id: 1, title: "Software Engineer", company: "Company A" },
    { id: 2, title: "Data Scientist", company: "Company B" },
    { id: 3, title: "Product Manager", company: "Company C" },
  ]; //job listings
  res.render("jobs", { title: "Job Listings", jobs });
});

// Render job details page
router.get("/:id", (req, res) => {
  const job = { id: req.params.id, title: "Sample Job", company: "XYZ Corp" }; // Example job details
  res.render("job-details", { title: "Job Details", job });
});

export default router;
