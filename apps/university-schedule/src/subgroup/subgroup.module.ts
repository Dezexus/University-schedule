import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SubgroupModuleBase } from "./base/subgroup.module.base";
import { SubgroupService } from "./subgroup.service";
import { SubgroupController } from "./subgroup.controller";
import { SubgroupResolver } from "./subgroup.resolver";

@Module({
  imports: [SubgroupModuleBase, forwardRef(() => AuthModule)],
  controllers: [SubgroupController],
  providers: [SubgroupService, SubgroupResolver],
  exports: [SubgroupService],
})
export class SubgroupModule {}
