'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _httpStatus = require('http-status');

var _httpStatus2 = _interopRequireDefault(_httpStatus);

var _APIError = require('../helpers/APIError');

var _APIError2 = _interopRequireDefault(_APIError);

var _mongooseHookCustomId = require('mongoose-hook-custom-id');

var _mongooseHookCustomId2 = _interopRequireDefault(_mongooseHookCustomId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = _bluebird2.default;

// PersonSchema.plugin(customId, { mongoose: mongoose })

//let ObjectId = mongoose.Schema.Types.ObjectId;

/**
 * Match Schema
 */
var MatchSchema = new _mongoose2.default.Schema({
	_id: String,
	isDeleted: Boolean,
	candidateListingId: String,
	jobListingId: String,
	score: Number,
	recruiterAction: String,
	candidateAction: String,
	candidateProfileCompleted: Boolean,
	bypass: Boolean,
	updatedAt: { type: Date, default: Date.now }

});

MatchSchema.plugin(_mongooseHookCustomId2.default, { mongoose: _mongoose2.default });
/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
MatchSchema.method({});

/**
 * Statics
 */
MatchSchema.statics = {
	/**
  * Get match
  * @param {ObjectId} id - The objectId of match.
  * @returns {Promise<Match, APIError>}
  */
	get: function get(id) {
		return this.findById(id).exec().then(function (match) {
			if (match) {
				return match;
			}
			var err = new _APIError2.default('No such match exists!', _httpStatus2.default.NOT_FOUND);
			return _bluebird2.default.reject(err);
		});
	},
	getById: function getById(id) {
		return this.findById(id).exec();
		// .then((match) => {
		// 	if(match) {
		// 		return match;
		// 	}
		// 	const err = new APIError('No such match exists!', httpStatus.NOT_FOUND);
		// 	return Promise.reject(err);
		// });
	},

	/**
  * List matchs in descending order of 'createdAt' timestamp.
  * @param {number} skip - Number of matchs to be skipped.
  * @param {number} limit - Limit number of matchs to be returned.
  * @returns {Promise<Match[]>}
  */
	list: function list() {
		var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
		    _ref$skip = _ref.skip,
		    skip = _ref$skip === undefined ? 0 : _ref$skip,
		    _ref$limit = _ref.limit,
		    limit = _ref$limit === undefined ? 50 : _ref$limit;

		return this.find().sort({ createdAt: -1 }).skip(skip).limit(limit).exec();
	},
	findOneByQuery: function findOneByQuery() {
		var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		//console.log(query, "inside from match", "mmmmmmm");
		return this.findOne(query)
		//  .sort({ createdAt: -1 })
		//  .skip(skip)
		//  .limit(limit)
		.exec();
	},
	updateOne: function updateOne(condition, modifier, options) {
		return this.findOneAndUpdate(condition, modifier, options)
		//  .sort({ createdAt: -1 })
		//  .skip(skip)
		//  .limit(limit)
		.exec();
	},
	removeMultiple: function removeMultiple(condition) {
		return this.remove(condition)
		//  .sort({ createdAt: -1 })
		//  .skip(skip)
		//  .limit(limit)
		.exec();
	}
};

/**
 * @typedef Match
 */
exports.default = _mongoose2.default.model('Match', MatchSchema, 'matchs');