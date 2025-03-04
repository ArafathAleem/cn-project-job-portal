const bcrypt = require('bcrypt');

class User {
    constructor(name, email, password, role, validDocument = null) {
        this.id = Date.now(); // Generate a unique ID for each user
        this.name = name;
        this.email = email;
        this.password = this.hashPassword(password);
        this.role = role; // 'JobSeeker' or 'Employer'
        this.validDocument = validDocument;
        this.registrationDate = new Date();
    }

    // Hash password before saving
    hashPassword(password) {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    }

    // Validate password during login
    async validatePassword(password) {
        return await bcrypt.compare(password, this.password);
    }
}

module.exports = User;
