import { Module } from "@nestjs/common";
import { DatabaseModule } from "../../database/database.module";
import { <%= moduleNameCap %>Providers } from "./<%= moduleName %>.providers";
import { <%= moduleNameCap %>Controller } from "./controllers/<%= moduleName %>.controller";
import { <%= moduleNameCap %>Service } from "./services/<%= moduleName %>.services";

@Module({
  imports: [DatabaseModule],
  controllers: [<%= moduleNameCap %>Controller],
  providers: [...<%= moduleNameCap %>Providers, <%= moduleNameCap %>Service],
  exports: [<%= moduleNameCap %>Service],
})
export class <%= moduleNameCap %>Module {}
