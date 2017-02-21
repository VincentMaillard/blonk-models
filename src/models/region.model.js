import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';
mongoose.Promise = Promise;
/**
 * Region Schema
 */
const RegionSchema = new mongoose.Schema({
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
RegionSchema.method({
});

/**
 * Statics
 */
RegionSchema.statics = {
  /**
   * Get region
   * @param {ObjectId} id - The objectId of region.
   * @returns {Promise<Region, APIError>}
   */
  get(id) {
    return this.findById(id)
      .exec()
      .then((region) => {
        if (region) {
          return region;
        }
        const err = new APIError('No such region exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List regions in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of regions to be skipped.
   * @param {number} limit - Limit number of regions to be returned.
   * @returns {Promise<Region[]>}
   */
  list({ skip = 0, limit = 50 } = {}) {
    return this.find()
      .sort({ createdAt: -1 })
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
  }

};

/**
 * @typedef Region
 */
export default mongoose.model('Region',RegionSchema, 'regions');
