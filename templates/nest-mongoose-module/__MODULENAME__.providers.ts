import { Connection } from 'mongoose'
import { <%= modelNameCap %> } from '../../constants/Models'
import { <%= moduleNameCap %>Schema } from './schema/<%= moduleName %>.schema'

export const <%= moduleNameCap %>Providers = [
  {
    provide: <%= modelNameCap %>.model,
    useFactory: (connection: Connection) =>
      connection.model(<%= modelNameCap %>.tableName, <%= moduleNameCap %>Schema),
    inject: ['DATABASE_CONNECTION'],
  },
}