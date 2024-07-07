import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DayOfWeekModuleBase } from "./base/dayOfWeek.module.base";
import { DayOfWeekService } from "./dayOfWeek.service";
import { DayOfWeekController } from "./dayOfWeek.controller";
import { DayOfWeekResolver } from "./dayOfWeek.resolver";

@Module({
  imports: [DayOfWeekModuleBase, forwardRef(() => AuthModule)],
  controllers: [DayOfWeekController],
  providers: [DayOfWeekService, DayOfWeekResolver],
  exports: [DayOfWeekService],
})
export class DayOfWeekModule {}
