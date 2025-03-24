import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account.js'
import { bugSchema } from '../models/Bug.js';

class DbContext {

  Account = mongoose.model('Account', AccountSchema);
  Bug = mongoose.model('Bug', bugSchema);
  
}

export const dbContext = new DbContext()
