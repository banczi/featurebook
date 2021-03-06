var path = require('path'),
    pdfGenerator = require('./pdf-generator');

module.exports = {
    execute: execute
};

function execute(params) {
    var outputFile = path.join(params.outputDir, 'pdf', 'featurebook.pdf');

    pdfGenerator.generate(['Feature 1', 'Feature 2', 'Feature 3'], outputFile);
}
