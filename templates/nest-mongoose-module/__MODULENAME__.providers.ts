import { Connection } from 'mongoose'
import { <%= modelNameCap %> } from '../../constants/Models'
import { <%= modelNameCap %>Schema } from './schema/user.schema'

export const <%= moduleNameCap %>Providers = [
  {
    provide: <%= modelNameCap %>.model,
    useFactory: (connection: Connection) =>
      connection.model(<%= modelNameCap %>.tableName, <%= modelNameCap %>Schema),
    inject: ['DATABASE_CONNECTION'],
  },
}