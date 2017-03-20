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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_mongoose2.default.Promise = _bluebird2.default;
/**
 * Salary Schema
 */
var SalarySchema = new _mongoose2.default.Schema({
  _id: String,
  value: String,
  user: String,
  contract: String,
  createdAt: Date,
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
SalarySchema.method({});

/**
 * Statics
 */
SalarySchema.statics = _defineProperty({
  /**
   * Get salary
   * @param {ObjectId} id - The objectId of salary.
   * @returns {Promise<Salary, APIError>}
   */
  get: function get(id) {
    return this.findById(id).exec().then(function (salary) {
      if (salary) {
        return salary;
      }
      var err = new _APIError2.default('No such user exists!', _httpStatus2.default.NOT_FOUND);
      return _bluebird2.default.reject(err);
    });
  },


  /**
   * List salaries in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of salaries to be skipped.
   * @param {number} limit - Limit number of salaries to be returned.
   * @returns {Promise<Salary[]>}
   */
  list: function list() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$skip = _ref.skip,
        skip = _ref$skip === undefined ? 0 : _ref$skip,
        _ref$limit = _ref.limit,
        limit = _ref$limit === undefined ? 50 : _ref$limit;

    console.log("inside the list of Salary", this, skip, limit);
    return this.find()
    //  .sort({ createdAt: -1 })
    .skip(skip).limit(limit).exec();
  },
  findByQuery: function findByQuery() {
    var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    //  { _id: { '$in': [ 'rMnzA9ZMtsEypWhS2', undefined ] } }
    return this.find(query)
    //.sort({ createdAt: -1 })
    //.skip(skip)
    //.limit(limit)
    .exec();
  },
  findOneByQuery: function findOneByQuery() {
    var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return this.findOne(query).exec();
  }
}, 'findByQuery', function findByQuery() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return this.find(query).exec();
});

/**
 * @typedef Salary
 */

var Salary = _mongoose2.default.model('Salary', SalarySchema, 'salaries');
exports.default = Salary;