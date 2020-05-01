import { HttpException, HttpStatus } from '@nestjs/common'
import {
  Resolver,
  ResolveField,
  Mutation,
  Int,
  Args,
} from '@nestjs/graphql'
import { <%= moduleNameCap %>Service } from '../services/<%= moduleName %>.services'

@Resolver('<%= moduleNameCap %>')
export class <%= moduleNameCap %>Resolver {
  constructor(
    private readonly <%= moduleName %>Service: <%= moduleNameCap %>Service
  ) {}

  @Mutation()
  @ResolveField()
  async create<%= moduleNameCap %>(
    @Args('<%= moduleName %>') <%= moduleName %>,
  ) {
    try {
      const result = await this.<%= moduleName %>Service.create(<%= moduleName %>)
      return result
    } catch (error) {
      return error
    }
  }

  @Mutation()
  @ResolveField()
  async update<%= moduleNameCap %>(
    @Args('<%= moduleName %>ID', { type: () => Int }) <%= moduleName %>ID: number,
    @Args('<%= moduleName %>') <%= moduleName %>,
  ) {
    const imageTemp = []
    try {

      const result = await this.<%= moduleName %>Service.findById(<%= moduleName %>ID)
      if (result) {
        return await this.<%= moduleName %>Service.update(result, <%= moduleName %>)
      }

      throw new HttpException(
        {
          message: 'ไม่พบข้อมูลที่ต้องการแก้ไข',
          error: 'NO CONTENT',
        },
        HttpStatus.NO_CONTENT,
      )
    } catch (error) {
      return error
    }
  }

  @Mutation()
  @ResolveField()
  async delete<%= moduleNameCap %>(
    @Args('<%= moduleName %>ID', { type: () => Int }) <%= moduleName %>ID: number,
  ) {
    try {
      const <%= moduleName %> = await this.<%= moduleName %>Service.findById(<%= moduleName %>ID)
      await this.<%= moduleName %>Service.delete(<%= moduleName %>)
      return true
    } catch (error) {
      return error
    }
  }
}
