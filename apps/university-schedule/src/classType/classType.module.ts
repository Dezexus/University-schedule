import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ClassTypeModuleBase } from "./base/classType.module.base";
import { ClassTypeService } from "./classType.service";
import { ClassTypeController } from "./classType.controller";
import { ClassTypeResolver } from "./classType.resolver";

@Module({
  imports: [ClassTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [ClassTypeController],
  providers: [ClassTypeService, ClassTypeResolver],
  exports: [ClassTypeService],
})
export class ClassTypeModule {}
