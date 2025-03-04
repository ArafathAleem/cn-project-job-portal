class Application {
    constructor(userId, jobId, status = 'Pending') {
        this.id = Date.now(); // Generate a unique ID for each application
        this.userId = userId;
        this.jobId = jobId;
        this.status = status;
    }
}

class ApplicationModel {
    constructor() {
        this.applications = [];
    }

    // Create a new job application
    async createApplication(userId, jobId) {
        const existingApplication = await this.getApplicationByUserAndJob(userId, jobId);
        if (existingApplication) {
            throw new Error('You have already applied for this job.');
        }
        const application = new Application(userId, jobId);
        this.applications.push(application);
        return application;
    }

    // Get application by User ID and Job ID
    async getApplicationByUserAndJob(userId, jobId) {
        return this.applications.find(app => app.userId === userId && app.jobId === jobId);
    }

    // Get applications by Job ID
    async getApplicationsByJobId(jobId) {
        return this.applications.filter(app => app.jobId === jobId);
    }

    // Approve an application
    async approveApplication(id) {
        return this.updateApplicationStatus(id, 'Approved');
    }

    // Reject an application
    async rejectApplication(id) {
        return this.updateApplicationStatus(id, 'Rejected');
    }

    // Update application status
    async updateApplicationStatus(id, newStatus) {
        const application = await this.getApplicationById(id);
        if (application) {
            application.status = newStatus;
            return application;
        }
        return null;
    }

    // Delete an application by ID
    async deleteApplication(id) {
        const application = await this.getApplicationById(id);
        if (application) {
            this.applications = this.applications.filter(app => app.id !== id);
            return application;
        }
        return null;
    }

    // Get application by ID
    async getApplicationById(id) {
        return this.applications.find(app => app.id === id);
    }
}

module.exports = new ApplicationModel();