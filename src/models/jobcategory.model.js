import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';
mongoose.Promise = Promise;
/**
 * JobCategory Schema
 */
const JobCategorySchema = new mongoose.Schema({
_id:String,
parent:String,
title:String,
isDeleted:Boolean
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
JobCategorySchema.method({
});

/**
 * Statics
 */
JobCategorySchema.statics = {
  /**
   * Get JobCategory
   * @param {ObjectId} id - The objectId of JobCategory.
   * @returns {Promise<JobCategory, APIError>}
   */
  get(id) {
    return this.findById(id)
      .exec()
      .then((user) => {
        if (user) {
          return user;
        }
        const err = new APIError('No such JobCategory exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List jobcategories in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of JobCategories to be skipped.
   * @param {number} limit - Limit number of JobCategories to be returned.
   * @returns {Promise<JobCategory[]>}
   */
  list({ skip = 0, limit = 50 } = {}) {
    return this.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .exec();
  },
  findByPositionName({ title, skip = 0, limit = 50 } = {}) {

    return this.findOne({'title':title})
      //.sort({ createdAt: -1 })
    //  .skip(skip)
      //.limit(limit)
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
 * @typedef JobCategory
 */
export default mongoose.model('JobCategory',JobCategorySchema, 'jobCategories');
