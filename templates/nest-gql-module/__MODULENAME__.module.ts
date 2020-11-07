import { Module } from "@nestjs/common";
import { DatabaseModule } from "../../database/database.module";
import { <%= moduleNameCap %>Provider } from "./<%= moduleName %>.providers";
import { <%= moduleNameCap %>Controller } from "./controllers/<%= moduleName %>.controller";
import { <%= moduleNameCap %>Service } from "./services/<%= moduleName %>.services";
import { <%= moduleNameCap %>Resolver } from "./resolvers/<%= moduleName %>.resolver";

@Module({
  imports: [DatabaseModule],
  controllers: [<%= moduleNameCap %>Controller],
  providers: [...<%= moduleNameCap %>Provider, <%= moduleNameCap %>Resolver, <%= moduleNameCap %>Service],
  exports: [<%= moduleNameCap %>Service],
})
export class <%= moduleNameCap %>Module {}
