import { ObjectType, InputType, Field } from '@nestjs/graphql'
import { ApiProperty } from '@nestjs/swagger'

@ObjectType()
@InputType()
export class <%= moduleNameCap %>DTO {
  @ApiProperty()
  @Field()
  <%= moduleName %>ID: number
}
