import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BellScheduleService } from "./bellSchedule.service";
import { BellScheduleControllerBase } from "./base/bellSchedule.controller.base";

@swagger.ApiTags("bellSchedules")
@common.Controller("bellSchedules")
export class BellScheduleController extends BellScheduleControllerBase {
  constructor(
    protected readonly service: BellScheduleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
