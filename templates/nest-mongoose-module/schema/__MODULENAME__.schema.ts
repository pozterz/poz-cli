import * as mongoose from 'mongoose'

export const <%= moduleNameCap %>Schema = new mongoose.Schema(
  {
    __v: { type: Number, select: false },
  },
  { versionKey: false },
)
