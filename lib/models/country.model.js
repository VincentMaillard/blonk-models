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
 * Country Schema
 */
var CountrySchema = new _mongoose2.default.Schema({
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
CountrySchema.method({});

/**
 * Statics
 */
CountrySchema.statics = {
  /**
   * Get country
   * @param {ObjectId} id - The objectId of user.
   * @returns {Promise<Country, APIError>}
   */
  get: function get(id) {
    return this.findById(id).exec().then(function (user) {
      if (user) {
        return user;
      }
      var err = new _APIError2.default('No such country exists!', _httpStatus2.default.NOT_FOUND);
      return _bluebird2.default.reject(err);
    });
  },


  /**
   * List Countries in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of Countries to be skipped.
   * @param {number} limit - Limit number of Countries to be returned.
   * @returns {Promise<Country[]>}
   */
  list: function list() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$skip = _ref.skip,
        skip = _ref$skip === undefined ? 0 : _ref$skip,
        _ref$limit = _ref.limit,
        limit = _ref$limit === undefined ? 300 : _ref$limit;

    return this.find().sort({ name: 1 }).skip(skip).limit(limit).exec();
  }
};

/**
 * @typedef Country
 */
exports.default = _mongoose2.default.model('Country', CountrySchema);