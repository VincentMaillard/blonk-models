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


const Blonk = {
	version: '1.0.0'
};
mongoose.connect( 'mongodb://localhost:4001/meteor', {
	server: {
		socketOptions: {
			keepAlive: 1
		}
	}
} );
mongoose.connection.on( 'error', () => {
	throw new Error( `unable to connect to database: ` );
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
