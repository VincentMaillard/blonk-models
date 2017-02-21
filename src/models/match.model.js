import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

import customId from 'mongoose-hook-custom-id';
mongoose.Promise = Promise;

// PersonSchema.plugin(customId, { mongoose: mongoose })

//let ObjectId = mongoose.Schema.Types.ObjectId;

/**
 * Match Schema
 */
const MatchSchema = new mongoose.Schema({
	_id: String,
	isDeleted: Boolean,
	candidateListingId: String,
	jobListingId: String,
	score: Number,
	recruiterAction: String,
	candidateAction: String,
	candidateProfileCompleted: Boolean,
	updatedAt: { type: Date, default: Date.now }

});

MatchSchema.plugin(customId, { mongoose: mongoose })
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
	get(id) {
		return this.findById(id)
			.exec()
			.then((match) => {
				if(match) {
					return match;
				}
				const err = new APIError('No such match exists!', httpStatus.NOT_FOUND);
				return Promise.reject(err);
			});
	},
	getById(id) {
		return this.findById(id)
			.exec()
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
	list({ skip = 0, limit = 50 } = {}) {
		return this.find()
			.sort({ createdAt: -1 })
			.skip(skip)
			.limit(limit)
			.exec();
	},
	findOneByQuery(query = {}) {
		//console.log(query, "inside from match", "mmmmmmm");
		return this.findOne(query)
			//  .sort({ createdAt: -1 })
			//  .skip(skip)
			//  .limit(limit)
			.exec();
	},
	updateOne(condition, modifier, options) {
		return this.findOneAndUpdate(condition, modifier, options)
			//  .sort({ createdAt: -1 })
			//  .skip(skip)
			//  .limit(limit)
			.exec();
	},
	removeMultiple(condition) {
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
export default mongoose.model('Match', MatchSchema, 'matchs');
