const {model} = require('mongoose');
const {HoldingSchema} = require('../schemas/HoldingSchemas');

const HoldingsModel = model('holding', HoldingSchema);

module.exports = {HoldingsModel};