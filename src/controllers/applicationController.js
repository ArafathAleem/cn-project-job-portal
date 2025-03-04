const ApplicationModel = require('../models/applicationModel');

class ApplicationController {
    // Apply for a job
    static async applyForJob(req, res) {
        try {
            const { jobId } = req.params;
            const userId = req.userId; // Set by authMiddleware
            const application = await ApplicationModel.createApplication(userId, jobId);
            res.status(201).json(application);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    // Get applications for a specific job (Employer View)
    static async getApplicationsForJob(req, res) {
        try {
            const { jobId } = req.params;
            const applications = await ApplicationModel.getApplicationsByJobId(jobId);
            res.status(200).json(applications);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving applications', error });
        }
    }

    // Approve an application
    static async approveApplication(req, res) {
        try {
            const { applicationId } = req.params;
            const application = await ApplicationModel.approveApplication(applicationId);
            if (application) {
                res.status(200).json(application);
            } else {
                res.status(404).json({ message: 'Application not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error approving application', error });
        }
    }

    // Reject an application
    static async rejectApplication(req, res) {
        try {
            const { applicationId } = req.params;
            const application = await ApplicationModel.rejectApplication(applicationId);
            if (application) {
                res.status(200).json(application);
            } else {
                res.status(404).json({ message: 'Application not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error rejecting application', error });
        }
    }

    // Delete an application
    static async deleteApplication(req, res) {
        try {
            const { applicationId } = req.params;
            const application = await ApplicationModel.deleteApplication(applicationId);
            if (application) {
                res.status(200).json({ message: 'Application deleted successfully' });
            } else {
                res.status(404).json({ message: 'Application not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error deleting application', error });
        }
    }
}

module.exports = ApplicationController;
