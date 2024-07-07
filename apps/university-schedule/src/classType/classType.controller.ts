import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ClassTypeService } from "./classType.service";
import { ClassTypeControllerBase } from "./base/classType.controller.base";

@swagger.ApiTags("classTypes")
@common.Controller("classTypes")
export class ClassTypeController extends ClassTypeControllerBase {
  constructor(
    protected readonly service: ClassTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
