import CandidateListing from './models/candidatelisting.model';
import Chat from './models/chat.model';
import Company from './models/company.model';
import ContractType from './models/contracttype.model';
import Country from './models/country.model';
import JobCategory from './models/jobcategory.model';
import JobListing from './models/joblisting.model';
import Match from './models/match.model';
import Region from './models/region.model';
import Salary from './models/salary.model';
import User from './models/user.model';
import mongoose from 'mongoose';
import config from '../config/env';

process.env.MONGO_URL = config.db;
console.log( process.env.MONGO_URL );
const Blonk = {
	version: '1.0.0'
};
mongoose.connect( process.env.MONGO_URL, {
	server: {
		socketOptions: {
			keepAlive: 1
		}
	}
} );
mongoose.connection.on( 'error', ( e ) => {
	throw new Error( `unable to connect to database:${e} ` );
} );
export {
	CandidateListing,
	Chat,
	Company,
	ContractType,
	Country,
	JobCategory,
	JobListing,
	Match,
	Region,
	Salary,
	User
};
