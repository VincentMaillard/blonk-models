import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';
mongoose.Promise = Promise;
/*
Chat schema
*/
const ChatSchema = new  mongoose.Schema({
  _id:String
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
ChatSchema.method({

});

/**
 * Statics
 */

 ChatSchema.statics = {
   get(id){
     return this.findById(id)
            .exec()
            .then((chat) => {
                if(chat){
                  return chat
                }
                const err = new APIError('no such chat exists!', httpStatus.NOT_FOUND);
                return Promise.reject(err);
            });

          },
          list({ skip = 0, limit = 50 } = {}) {
            return this.find()
            //  .sort({ createdAt: -1 })
              .skip(skip)
              .limit(limit)
              .exec();
          }
 };
 export default mongoose.model('Chat',ChatSchema);
