const newman = require('newman');
require('dotenv').config();
 
newman.run({
    collection:`https://api.postman.com/collections/39924919-6038318e-92fd-4a6d-b50f-fdb70308993f?access_key=${process.env.access_key}`,
    //collection:require('./collection/collection.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    //environment: './env.json',
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});