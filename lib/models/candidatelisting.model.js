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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_mongoose2.default.Promise = _bluebird2.default;
/**
 * CandidateListing Schema
 */
var CandidateSchema = new _mongoose2.default.Schema({
	_id: String,
	username: String,
	motivation: {
		locality: {
			country: String,
			region: String
		},
		sector: String,
		targetRole: String,
		contractType: String,
		salaryPackage: String,
		companySize: String,
		inspiringCompanies: [String]

	},
	weight: {
		motivation: {
			sector: Number,
			contractType: Number
		},
		yearsOfExperiences: Number,
		experiencesPosition: Number
	},
	yearsOfExperience: Number,
	profile: _defineProperty({
		Photo: String,
		skills: [String],
		name: String,
		resume: String,
		currentLocation: {
			country: String,
			region: String
		},
		yearsOfExperiences: Number,
		currentSalary: String
	}, 'skills', [String]),
	isDeleted: Boolean,
	userId: String,
	completed: Boolean,
	public: Boolean,
	firstLike: Boolean,
	description: String,
	experiences: [{
		position: String,
		company: String,
		startYear: String,
		endYear: String,
		current: Boolean,
		sector: String
	}],
	type: String,
	education: [{
		schoolName: String,
		degree: String,
		startYear: String,
		current: Boolean,
		endYear: String
	}]

});

// experiences: {
//   type: [Object],
//   label: 'Experiences',
//   denyUpdate: true,
//   optional: true,
// },
// 'experiences.$.position': {
//   type: String,
//   label: 'Position',
//   denyUpdate: true,
// },
// 'experiences.$.company': {
//   type: String,
//   label: 'Company',
//   denyUpdate: true,
// },
//  'experiences.$.sector': {
//   type: String,
//   label: 'Sector',
//   optional: true,
// },
// 'experiences.$.startDate': {
//   type: String,
//   label: 'Start Date',
//   denyUpdate: true,
// },
// 'experiences.$.endDate': {
//   type: String,
//   label: 'End Date',
//   denyUpdate: true,
// },
// 'experiences.$.currentPosition': {
//   type: Boolean,
//   label: 'Current Position',
//   denyUpdate: true,
// },
// weight: {
//   type: Object,
//   blackbox: true,
//   optional: true,
//   denyUpdate: true,
// },
// createdAt: {
//   type: Date,
//   denyUpdate: true,
// },
// updatedAt: {
//   type: Date,
//   denyUpdate: true,
// },

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
CandidateSchema.method({});

/**
 * Statics
 */
CandidateSchema.statics = {
	/**
  * Get Canididate
  * @param {ObjectId} id - The objectId of Canididate.
  * @returns {Promise<Canididate, APIError>}
  */
	get: function get(id) {
		return this.findById(id).exec().then(function (candidate) {
			if (candidate) {
				return candidate;
			}
			var err = new _APIError2.default('No such candidate exists!', _httpStatus2.default.NOT_FOUND);
			return _bluebird2.default.reject(err);
		});
	},
	getById: function getById(id) {
		return this.findById(id).exec();
		// .then((candidate) => {
		//   if (candidate) {
		//     return candidate;
		//   }
		//   const err = new APIError('No such candidate exists!', httpStatus.NOT_FOUND);
		//   return Promise.reject(err);
		// });
	},


	/**
  * List candidates in descending order of 'createdAt' timestamp.
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
	findByQuery: function findByQuery() {
		var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		//  { _id: { '$in': [ 'rMnzA9ZMtsEypWhS2', undefined ] } }
		return this.find(query)
		//.sort({ createdAt: -1 })
		//.skip(skip)
		//.limit(limit)
		.exec();
	},
	updateOne: function updateOne(condition, modifier, options) {
		return this.findOneAndUpdate(condition, modifier, options)
		//  .sort({ createdAt: -1 })
		//  .skip(skip)
		//  .limit(limit)
		.exec();
	}
};

/**
 * @typedef CandidateListing
 */
exports.default = _mongoose2.default.model('candidateListing', CandidateSchema, 'candidateListings');