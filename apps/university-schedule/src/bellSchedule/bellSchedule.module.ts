import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BellScheduleModuleBase } from "./base/bellSchedule.module.base";
import { BellScheduleService } from "./bellSchedule.service";
import { BellScheduleController } from "./bellSchedule.controller";
import { BellScheduleResolver } from "./bellSchedule.resolver";

@Module({
  imports: [BellScheduleModuleBase, forwardRef(() => AuthModule)],
  controllers: [BellScheduleController],
  providers: [BellScheduleService, BellScheduleResolver],
  exports: [BellScheduleService],
})
export class BellScheduleModule {}
