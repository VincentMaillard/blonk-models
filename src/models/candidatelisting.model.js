import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';
mongoose.Promise = Promise;
/**
 * CandidateListing Schema
 */
const CandidateSchema = new mongoose.Schema({
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
	profile: {
		Photo: String,
		skills: [String],
		name: String,
		resume: String,
		currentLocation: {
			country: String,
			region: String
		},
		yearsOfExperiences: Number,
		currentSalary: String,
		skills: [String],


	},
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
	get(id) {
		return this.findById(id)
			.exec()
			.then((candidate) => {
				if(candidate) {
					return candidate;
				}
				const err = new APIError('No such candidate exists!', httpStatus.NOT_FOUND);
				return Promise.reject(err);
			});
	},
	getById(id) {
		return this.findById(id)
			.exec()
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
	list({ skip = 0, limit = 50 } = {}) {
		return this.find()
			//.sort({ createdAt: -1 })
			.skip(skip)
			.limit(limit)
			.exec();
	},
	findByQuery(query = {}) {
		//  { _id: { '$in': [ 'rMnzA9ZMtsEypWhS2', undefined ] } }
		return this.find(query)
			//.sort({ createdAt: -1 })
			//.skip(skip)
			//.limit(limit)
			.exec();
	},
	updateOne(condition, modifier, options) {
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
export default mongoose.model('candidateListing', CandidateSchema, 'candidateListings');
