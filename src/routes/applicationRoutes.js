const express = require('express');
const ApplicationController = require('../controllers/applicationController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Apply for a job
router.post('/apply/:jobId', authMiddleware, ApplicationController.applyForJob);

// Get applications for a specific job (Employer View)
router.get('/employer/applications/:jobId', authMiddleware, ApplicationController.getApplicationsForJob);

// Approve an application
router.post('/applications/:applicationId/approve', authMiddleware, ApplicationController.approveApplication);

// Reject an application
router.post('/applications/:applicationId/reject', authMiddleware, ApplicationController.rejectApplication);

// Delete an application
router.post('/applications/:applicationId/delete', authMiddleware, ApplicationController.deleteApplication);

module.exports = router;
