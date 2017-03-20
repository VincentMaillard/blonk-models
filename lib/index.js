'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.User = exports.Salary = exports.Region = exports.Match = exports.JobListing = exports.JobCategory = exports.Country = exports.ContractType = exports.Company = exports.Chat = exports.CandidateListing = undefined;

var _candidatelisting = require('./models/candidatelisting.model');

var _candidatelisting2 = _interopRequireDefault(_candidatelisting);

var _chat = require('./models/chat.model');

var _chat2 = _interopRequireDefault(_chat);

var _company = require('./models/company.model');

var _company2 = _interopRequireDefault(_company);

var _contracttype = require('./models/contracttype.model');

var _contracttype2 = _interopRequireDefault(_contracttype);

var _country = require('./models/country.model');

var _country2 = _interopRequireDefault(_country);

var _jobcategory = require('./models/jobcategory.model');

var _jobcategory2 = _interopRequireDefault(_jobcategory);

var _joblisting = require('./models/joblisting.model');

var _joblisting2 = _interopRequireDefault(_joblisting);

var _match = require('./models/match.model');

var _match2 = _interopRequireDefault(_match);

var _region = require('./models/region.model');

var _region2 = _interopRequireDefault(_region);

var _salary = require('./models/salary.model');

var _salary2 = _interopRequireDefault(_salary);

var _user = require('./models/user.model');

var _user2 = _interopRequireDefault(_user);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Blonk = {
	version: '1.0.0'
};
_mongoose2.default.createConnection('mongodb://blonk-staging-bo:Bl0nkSt4g1ngB0@alcatraz.1.mongolayer.com:10346,alcatraz.0.mongolayer.com:10346/blonk-staging-back-office?replicaSet=set-57b639ab08173fe483000b6f', {
	server: {
		socketOptions: {
			keepAlive: 1
		}
	}
});
_mongoose2.default.connection.on('error', function (e) {
	throw new Error('unable to connect to database:' + e + ' ');
});
exports.CandidateListing = _candidatelisting2.default;
exports.Chat = _chat2.default;
exports.Company = _company2.default;
exports.ContractType = _contracttype2.default;
exports.Country = _country2.default;
exports.JobCategory = _jobcategory2.default;
exports.JobListing = _joblisting2.default;
exports.Match = _match2.default;
exports.Region = _region2.default;
exports.Salary = _salary2.default;
exports.User = _user2.default;