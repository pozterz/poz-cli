import {
    Controller,
    Get,
    Res,
    HttpStatus,
    UseGuards,
    Post,
    Body,
    Patch,
    Delete,
    Param,
    Query,
    Req,
    Logger
  } from '@nestjs/common'
  import { ApiTags } from '@nestjs/swagger'
  import { <%= moduleNameCap %>DTO } from '../models/<%= moduleName %>.dto'
  import { <%= moduleNameCap %>Service } from '../services/<%= moduleName %>.services'
  
  @ApiTags('<%= moduleName %>')
  @Controller('<%= moduleName %>')
  export class <%= moduleNameCap %>Controller {
    
    constructor(
      private readonly <%= moduleName %>Service: <%= moduleNameCap %>Service
    ) {}
    
    @Get()
    async get<%= moduleNameCap %>(@Res() res) {
        const <%= moduleName %> = await this.<%= moduleName %>Service.findAll({})
        return res.status(HttpStatus.OK).json(<%= moduleName %>)
    }

    @Post()
    async new<%= moduleNameCap %>(@Body() body, @Res() res) {
        try {
        const <%= moduleName %> = await this.<%= moduleName %>Service.create(body)
        return res.status(HttpStatus.OK).json(<%= moduleName %>)
        } catch (err) {
        return res.status(HttpStatus.BAD_REQUEST).json(err)
        }
    }

    @Patch(':id')
    async update<%= moduleNameCap %>(@Param('id') id, @Body() body, @Res() res) {
        try {
        const <%= moduleName %> = await this.<%= moduleName %>Service.update(id, body)
        return res.status(HttpStatus.OK).json(<%= moduleName %>)
        } catch (err) {
        return res.status(HttpStatus.BAD_REQUEST).json(err)
        }
    }

    @Delete(':id')
    async delete<%= moduleNameCap %>(@Param('id') id, @Res() res) {
        try {
        const <%= moduleName %> = await this.<%= moduleName %>Service.delete(id)
        return res.status(HttpStatus.OK).json(<%= moduleName %>)
        } catch (err) {
        return res.status(HttpStatus.BAD_REQUEST).json(err)
        }
    }
  }
  