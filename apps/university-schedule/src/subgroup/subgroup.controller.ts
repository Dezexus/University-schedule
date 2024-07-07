import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SubgroupService } from "./subgroup.service";
import { SubgroupControllerBase } from "./base/subgroup.controller.base";

@swagger.ApiTags("subgroups")
@common.Controller("subgroups")
export class SubgroupController extends SubgroupControllerBase {
  constructor(
    protected readonly service: SubgroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
