import express from "express";
const router = express.Router();

// Render all jobs
router.get("/recruiter/dashboard", (req, res) => {
  const recruiter = { name: "John Doe" }; // Example recruiter data
  const jobs = [
    { id: 1, title: "Software Engineer" },
    { id: 2, title: "Data Scientist" },
    { id: 3, title: "Product Manager" },
  ]; // Example job listings

  res.render("recruiter-dashboard", { 
    title: "Recruiter Dashboard",
    recruiter, 
    jobs 
  });
});


export default router;
