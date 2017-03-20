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
/*
Contract Schema
*/

var ContractTypeSchema = new _mongoose2.default.Schema({
  _id: String,
  name: String,
  user: String,
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
ContractTypeSchema.method({});

/**
 * Statics
 */

ContractTypeSchema.statics = {
  get: function get(id) {
    return this.findById(id).exec().then(function (contract) {
      if (contract) {
        return contract;
      }
      var err = new _APIError2.default('no such contract exists!', _httpStatus2.default.NOT_FOUND);
      return _bluebird2.default.reject(err);
    });
  },
  list: function list() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$skip = _ref.skip,
        skip = _ref$skip === undefined ? 0 : _ref$skip,
        _ref$limit = _ref.limit,
        limit = _ref$limit === undefined ? 100 : _ref$limit;

    return this.find().skip(skip).limit(limit).exec();
  },
  findOneByQuery: function findOneByQuery() {
    var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return this.findOne(query).exec();
  },
  findByQuery: function findByQuery() {
    var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return this.find(query).exec();
  }
};

exports.default = _mongoose2.default.model('ContractType', ContractTypeSchema, 'contractTypes');