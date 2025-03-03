import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";

import authRoutes from "./src/routes/authRoutes.js";
import jobRoutes from "./src/routes/jobRoutes.js";

dotenv.config(); // Load environment variables

const app = express();

// Set up EJS
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src/views"));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET || "defaultsecret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set to true if using HTTPS
  })
);
app.use(express.static("src/public")); // Serve static files

// Routes
app.use("/", authRoutes);
app.use("/", jobRoutes);

// Handle 404 (Page Not Found)
app.use((req, res) => {
  res.status(404).render("errorPage", { title: "Page Not Found" });
});

// Start the Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});