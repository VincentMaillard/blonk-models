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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = _bluebird2.default;
/**
 * JobListing Schema
 */
var JobListingSchema = new _mongoose2.default.Schema({
	_id: String,
	contractType: String,
	description: String,
	hideSalary: Boolean,
	locality: {
		country: String,
		region: String
	},
	position: String,
	salaryPackage: String,
	skills: [String],
	targetedCompany: [String],
	title: String,
	yearsOfExperiences: Number,
	companyId: String,
	createdAt: Date,
	updatedAt: Date,
	isDeleted: Boolean

});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
JobListingSchema.method({});

/**
 * Statics
 */
JobListingSchema.statics = {
	/**
  * Get JobListing
  * @param {ObjectId} id - The objectId of JobListing.
  * @returns {Promise<JobListing, APIError>}
  */
	get: function get(id) {
		return this.findById(id).exec().then(function (jobListing) {
			if (jobListing) {
				return jobListing;
			}
			var err = new _APIError2.default('No such candidate exists!', _httpStatus2.default.NOT_FOUND);
			return _bluebird2.default.reject(err);
		});
	},
	getById: function getById(id) {
		return this.findById(id).exec();
		// .then((jobListing) => {
		//   if (jobListing) {
		//     return jobListing;
		//   }
		//   const err = new APIError('No such candidate exists!', httpStatus.NOT_FOUND);
		//   return Promise.reject(err);
		// });
	},


	/**
  * List JobListings in descending order of 'createdAt' timestamp.
  * @param {number} skip - Number of candidates to be skipped.
  * @param {number} limit - Limit number of candidates to be returned.
  * @returns {Promise<Canididate[]>}
  */
	list: function list() {
		var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
		    _ref$skip = _ref.skip,
		    skip = _ref$skip === undefined ? 0 : _ref$skip,
		    _ref$limit = _ref.limit,
		    limit = _ref$limit === undefined ? 50 : _ref$limit;

		return this.find()
		//.sort({ createdAt: -1 })
		.skip(skip).limit(limit).exec();
	},
	updateOne: function updateOne(condition, modifier, options) {
		return this.findOneAndUpdate(condition, modifier, options)
		//  .sort({ createdAt: -1 })
		//  .skip(skip)
		//  .limit(limit)
		.exec();
	},
	findByQuery: function findByQuery() {
		var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		//  { _id: { '$in': [ 'rMnzA9ZMtsEypWhS2', undefined ] } }
		return this.find(query)
		//.sort({ createdAt: -1 })
		//.skip(skip)
		//.limit(limit)
		.exec();
	}
};

/**
 * @typedef CandidateListing
 */
exports.default = _mongoose2.default.model('jobListings', JobListingSchema, 'jobListings');