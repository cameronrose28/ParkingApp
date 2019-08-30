const Log = require ('../models/Log')


exports.PostLog = (status, description) => {
    const log = new Log({
        status: status,
        description: description
    });
    log
    .save()
    .then("Success")
    .catch(err => console.log(err));
}