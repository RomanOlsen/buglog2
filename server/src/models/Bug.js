import { Schema } from "mongoose";
import { AccountSchema } from "./Account.js";

export const bugSchema = new Schema({
  
    title: {type: String, minLength: 10, maxLength: 50, required: true },
    description: {type: String, minLength: 10, maxLength: 500, required: true},
    priority: {type: Number, min: 1, max: 5, required: true},
    closed: {type: Boolean, required: true},
    closedDate: {type: Date, required: false },
    creatorId: { type: Schema.ObjectId, required: true, ref: 'Account' },

    // creator: {type: AccountSchema}
  
},
{
  timestamps: true,
  toJSON: { virtuals: true, versionKey: false }
}
)

