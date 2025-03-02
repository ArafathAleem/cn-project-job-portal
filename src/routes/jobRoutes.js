import express from "express";
const router = express.Router();

// Render all jobs
router.get("/", (req, res) => {
  const jobs = []; // Fetch from database later
  res.render("jobs", { title: "Job Listings", jobs });
});

// Render job details page
router.get("/:id", (req, res) => {
  const job = { id: req.params.id, title: "Sample Job", company: "XYZ Corp" };
  res.render("job-details", { title: "Job Details", job });
});

export default router;
