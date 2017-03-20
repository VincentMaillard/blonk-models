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
 * Region Schema
 */
var RegionSchema = new _mongoose2.default.Schema({
  _id: String
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
RegionSchema.method({});

/**
 * Statics
 */
RegionSchema.statics = {
  /**
   * Get region
   * @param {ObjectId} id - The objectId of region.
   * @returns {Promise<Region, APIError>}
   */
  get: function get(id) {
    return this.findById(id).exec().then(function (region) {
      if (region) {
        return region;
      }
      var err = new _APIError2.default('No such region exists!', _httpStatus2.default.NOT_FOUND);
      return _bluebird2.default.reject(err);
    });
  },


  /**
   * List regions in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of regions to be skipped.
   * @param {number} limit - Limit number of regions to be returned.
   * @returns {Promise<Region[]>}
   */
  list: function list() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$skip = _ref.skip,
        skip = _ref$skip === undefined ? 0 : _ref$skip,
        _ref$limit = _ref.limit,
        limit = _ref$limit === undefined ? 50 : _ref$limit;

    return this.find().sort({ createdAt: -1 }).skip(skip).limit(limit).exec();
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
 * @typedef Region
 */
exports.default = _mongoose2.default.model('Region', RegionSchema, 'regions');