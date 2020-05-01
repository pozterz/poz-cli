import {
  Column,
  Model,
  PrimaryKey,
  Table,
  AutoIncrement,
} from 'sequelize-typescript'


@Table({
  tableName: '<%= moduleName %>',
})
export class <%= moduleNameCap %> extends Model<<%= moduleNameCap %>> {
  @PrimaryKey
  @AutoIncrement
  @Column
  <%= moduleName %>ID: number

  hasKey = key => {
    return key in this
  }
}
