// <!-- authenticationMiddleware.js:

// Handles user authentication before processing requests.
// authorizationMiddleware.js:

// Manages user authorization to ensure users have the necessary permissions.
// loggingMiddleware.js:

// Implements logging for tracking requests and responses.
// inputSanitizationMiddleware.js:

// Cleanses and sanitizes incoming data to prevent security vulnerabilities.
// rateLimitingMiddleware.js:

// Implements rate limiting to protect against abuse.
// requestParsingMiddleware.js:

// Parses incoming request data, making it accessible to the controller.
// corsMiddleware.js:

// Manages Cross-Origin Resource Sharing to control access to resources. 

// Logging middleware
const loggingMiddleware = (req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date()}`);
    next();
};

// Authentication middleware
const authenticationMiddleware = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).send('Unauthorized');
};

// Authorization middleware
const authorizationMiddleware = (req, res, next) => {
    if (req.user.role === 'admin') {
        return next();
    }
    res.status(403).send('Forbidden');
};
