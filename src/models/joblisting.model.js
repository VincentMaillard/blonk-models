import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';
mongoose.Promise = Promise;
/**
 * JobListing Schema
 */
const JobListingSchema = new mongoose.Schema({
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
	get(id) {
		return this.findById(id)
			.exec()
			.then((jobListing) => {
				if(jobListing) {
					return jobListing;
				}
				const err = new APIError('No such candidate exists!', httpStatus.NOT_FOUND);
				return Promise.reject(err);
			});
	},
	getById(id) {
		return this.findById(id)
			.exec()
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
	list({ skip = 0, limit = 50 } = {}) {
		return this.find()
			//.sort({ createdAt: -1 })
			.skip(skip)
			.limit(limit)
			.exec();
	},
	updateOne(condition, modifier, options) {
		return this.findOneAndUpdate(condition, modifier, options)
			//  .sort({ createdAt: -1 })
			//  .skip(skip)
			//  .limit(limit)
			.exec();
	},
	findByQuery(query = {}) {
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
export default mongoose.model('jobListings', JobListingSchema, 'jobListings');
