import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';
mongoose.Promise = Promise;
/*
Contract Schema
*/

const ContractTypeSchema = new mongoose.Schema({
  _id:String,
  name:String,
  user:String,
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
ContractTypeSchema.method({
});

/**
 * Statics
 */

 ContractTypeSchema.statics = {
   get(id){
     return this.findById(id)
            .exec()
            .then((contract) =>{
              if(contract){
                return contract
              }
              const err = new APIError('no such contract exists!', httpStatus.NOT_FOUND)
              return Promise.reject(err);
            })
   },
   list({ skip = 0, limit = 50 } = {}){
        return this.find()
                .skip(skip)
                .limit(limit)
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


 export default mongoose.model('ContractType',ContractTypeSchema, 'contractTypes');
