import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';
mongoose.Promise = Promise;
/**
 * Salary Schema
 */
const SalarySchema = new mongoose.Schema({
  _id:String,
  value:String,
  user:String,
  contract:String,
  createdAt: Date,
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
SalarySchema.method({
});

/**
 * Statics
 */
SalarySchema.statics = {
  /**
   * Get salary
   * @param {ObjectId} id - The objectId of salary.
   * @returns {Promise<Salary, APIError>}
   */
  get(id) {
    return this.findById(id)
      .exec()
      .then((salary) => {
        if (salary) {
          return salary;
        }
        const err = new APIError('No such user exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List salaries in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of salaries to be skipped.
   * @param {number} limit - Limit number of salaries to be returned.
   * @returns {Promise<Salary[]>}
   */
  list({ skip = 0, limit = 50 } = {}) {
    console.log("inside the list of Salary", this, skip,limit);
    return this.find()
    //  .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .exec();
  }
  ,
  findByQuery(query = {}) {
  //  { _id: { '$in': [ 'rMnzA9ZMtsEypWhS2', undefined ] } }
    return this.find(query)
      //.sort({ createdAt: -1 })
      //.skip(skip)
      //.limit(limit)
      .exec();
  },
  findOneByQuery(query = {}) {
    return this.findOne(query)
      .exec();
  },
  findByQuery(query = {}) {
    return this.find(query)
      .exec();
  }
};

/**
 * @typedef Salary
 */

let Salary = mongoose.model('Salary',SalarySchema, 'salaries');
export default Salary;
