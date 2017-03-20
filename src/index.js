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
mongoose.createConnection( 'mongodb://blonk-staging-bo:Bl0nkSt4g1ngB0@alcatraz.1.mongolayer.com:10346,alcatraz.0.mongolayer.com:10346/blonk-staging-back-office?replicaSet=set-57b639ab08173fe483000b6f', {
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
