import { Module } from "@nestjs/common";
import { DatabaseModule } from "../../middleware/database/database.module";
import { <%= moduleNameCap %>Provider } from "./<%= moduleName %>.providers";
import { <%= moduleNameCap %>Controller } from "./controllers/<%= moduleName %>.controller";
import { <%= moduleNameCap %>Service } from "./services/<%= moduleName %>.services";

@Module({
  imports: [DatabaseModule],
  controllers: [<%= moduleNameCap %>Controller],
  providers: [...<%= moduleNameCap %>Provider, <%= moduleNameCap %>Service],
  exports: [<%= moduleNameCap %>Service],
})
export class <%= moduleNameCap %>Module {}
