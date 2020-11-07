import { ApiProperty } from '@nestjs/swagger'

export class <%= moduleNameCap %>DTO {
  @ApiProperty()
  <%= moduleName %>ID: number
}
