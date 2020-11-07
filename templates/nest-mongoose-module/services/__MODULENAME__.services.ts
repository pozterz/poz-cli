import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { <%= modelNameCap %> } from '../../../constants/Models'
import { <%= moduleNameCap %> } from '../schema/<%= moduleName %>.interface'
import { <%= moduleNameCap %>DTO } from '../schema/<%= moduleName %>.dto'

@Injectable()
export class <%= moduleNameCap %>Service {
  constructor(
    @InjectModel(<%= modelNameCap %>.tableName)
    private readonly <%= moduleName %>: Model<<%= moduleNameCap %>>,
  ) {}

  async findAll(options = {}): Promise<<%= moduleNameCap %>[]> {
    return await this.<%= moduleName %>.find(options).lean()
  }

  async findById(id, options = {}): Promise<<%= moduleNameCap %>> {
    return await this.<%= moduleName %>.findById(id, options).lean()
  }

  async create(data: <%= moduleNameCap %>DTO): Promise<<%= moduleNameCap %>> {
    return this.<%= moduleName %>.create(data)
  }

  async update(
    <%= moduleName %>: <%= moduleNameCap %>,
    data: <%= moduleNameCap %>DTO,
  ): Promise<<%= moduleNameCap %>> {
     return <%= moduleName %>.update(data)
  }

  async delete(<%= moduleName %>: <%= moduleNameCap %>) {
    return await <%= moduleName %>.remove()
  }
}
