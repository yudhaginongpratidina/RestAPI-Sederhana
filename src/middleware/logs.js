const logRequest = (req, res, next) => {
    console.log('Log terjadi request di', req.path);
    next();
}

module.exports = logRequest;