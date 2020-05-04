import { Injectable, Inject } from '@nestjs/common'
import { IRepository } from '../../../constants/IRepository'
import { <%= moduleNameCap %> } from '../entity/<%= moduleName %>.entity'
import { <%= moduleNameCap %>DTO } from '../models/<%= moduleName %>.dto'

@Injectable()
export class <%= moduleNameCap %>Service {
  constructor(
    @Inject(IRepository.<%= moduleName %>Repository)
    private readonly <%= moduleName %>: typeof <%= moduleNameCap %>,
  ) {}

  hasKey = key => {
    return new <%= moduleNameCap %>().hasKey(key)
  }

  async findAll(options = {}): Promise<<%= moduleNameCap %>[]> {
    return await this.<%= moduleName %>.findAll(options)
  }

  async findById(id, options = {}): Promise<<%= moduleNameCap %>> {
    return await this.<%= moduleName %>.findByPk(id, options)
  }

  async create(data: <%= moduleNameCap %>DTO): Promise<<%= moduleNameCap %>> {
    let transaction
    try {
      transaction = await this.<%= moduleName %>.sequelize.transaction()
      const result = await this.<%= moduleName %>.create<<%= moduleNameCap %>>(data, {
        transaction,
      })
      await transaction.commit()
      return result
    } catch (err) {
      await transaction.rollback()
      throw new Error(err)
    }
  }

  async update(
    <%= moduleName %>: <%= moduleNameCap %>,
    <%= moduleNameCap %>DTO: <%= moduleNameCap %>DTO,
  ): Promise<<%= moduleNameCap %>> {
    let transaction
    try {
      transaction = await this.<%= moduleName %>.sequelize.transaction()
      const result = await <%= moduleName %>.update(<%= moduleNameCap %>DTO, {
        transaction,
      })
      await transaction.commit()
      return result
    } catch (err) {
      await transaction.rollback()
      throw new Error(err)
    }
  }

  async delete(<%= moduleName %>: <%= moduleNameCap %>) {
    let transaction
    try {
      transaction = await this.<%= moduleName %>.sequelize.transaction()
      const result = await <%= moduleName %>.destroy({
        transaction,
      })
      await transaction.commit()
      return result
    } catch (err) {
      await transaction.rollback()
      throw new Error(err)
    }
  }
}
