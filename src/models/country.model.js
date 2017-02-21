import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';
mongoose.Promise = Promise;
/**
 * Country Schema
 */
const CountrySchema = new mongoose.Schema({
_id:String
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
CountrySchema.method({
});

/**
 * Statics
 */
CountrySchema.statics = {
  /**
   * Get country
   * @param {ObjectId} id - The objectId of user.
   * @returns {Promise<Country, APIError>}
   */
  get(id) {
    return this.findById(id)
      .exec()
      .then((user) => {
        if (user) {
          return user;
        }
        const err = new APIError('No such country exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List Countries in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of Countries to be skipped.
   * @param {number} limit - Limit number of Countries to be returned.
   * @returns {Promise<Country[]>}
   */
  list({ skip = 0, limit = 300 } = {}) {
    return this.find()
      .sort({ name: 1 })
      .skip(skip)
      .limit(limit)
      .exec();
  }
};

/**
 * @typedef Country
 */
export default mongoose.model('Country', CountrySchema);
