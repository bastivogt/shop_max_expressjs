const LoggerMiddleware = {
    log(req, res, next) {
        console.log(`path: ${req.path}`);
        next();
    }
}

module.exports = LoggerMiddleware;