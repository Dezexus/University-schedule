import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ClassTypeResolverBase } from "./base/classType.resolver.base";
import { ClassType } from "./base/ClassType";
import { ClassTypeService } from "./classType.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ClassType)
export class ClassTypeResolver extends ClassTypeResolverBase {
  constructor(
    protected readonly service: ClassTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
