import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';
mongoose.Promise = Promise;
/**
 * Company Schema
 */
const CompanySchema = new mongoose.Schema({
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
CompanySchema.method({
});

/**
 * Statics
 */
CompanySchema.statics = {
  /**
   * Get company
   * @param {ObjectId} id - The objectId of company.
   * @returns {Promise<Company, APIError>}
   */
  get(id) {
    return this.findById(id)
      .exec()
      .then((company) => {
        if (company) {
          return company;
        }
        const err = new APIError('No such user exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List ccompanies in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of ccompanies to be skipped.
   * @param {number} limit - Limit number of ccompanies to be returned.
   * @returns {Promise<Company[]>}
   */
  list({ skip = 0, limit = 50 } = {}) {
    return this.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .exec();
  }
};

/**
 * @typedef User
 */
export default mongoose.model('Company', CompanySchema);
