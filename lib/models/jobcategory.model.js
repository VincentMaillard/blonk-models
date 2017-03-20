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
 * JobCategory Schema
 */
var JobCategorySchema = new _mongoose2.default.Schema({
  _id: String,
  parent: String,
  title: String,
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
JobCategorySchema.method({});

/**
 * Statics
 */
JobCategorySchema.statics = {
  /**
   * Get JobCategory
   * @param {ObjectId} id - The objectId of JobCategory.
   * @returns {Promise<JobCategory, APIError>}
   */
  get: function get(id) {
    return this.findById(id).exec().then(function (user) {
      if (user) {
        return user;
      }
      var err = new _APIError2.default('No such JobCategory exists!', _httpStatus2.default.NOT_FOUND);
      return _bluebird2.default.reject(err);
    });
  },


  /**
   * List jobcategories in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of JobCategories to be skipped.
   * @param {number} limit - Limit number of JobCategories to be returned.
   * @returns {Promise<JobCategory[]>}
   */
  list: function list() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$skip = _ref.skip,
        skip = _ref$skip === undefined ? 0 : _ref$skip,
        _ref$limit = _ref.limit,
        limit = _ref$limit === undefined ? 50 : _ref$limit;

    return this.find().sort({ createdAt: -1 }).skip(skip).limit(limit).exec();
  },
  findByPositionName: function findByPositionName() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        title = _ref2.title,
        _ref2$skip = _ref2.skip,
        skip = _ref2$skip === undefined ? 0 : _ref2$skip,
        _ref2$limit = _ref2.limit,
        limit = _ref2$limit === undefined ? 50 : _ref2$limit;

    return this.findOne({ 'title': title })
    //.sort({ createdAt: -1 })
    //  .skip(skip)
    //.limit(limit)
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
 * @typedef JobCategory
 */
exports.default = _mongoose2.default.model('JobCategory', JobCategorySchema, 'jobCategories');