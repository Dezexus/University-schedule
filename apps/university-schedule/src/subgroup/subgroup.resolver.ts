import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SubgroupResolverBase } from "./base/subgroup.resolver.base";
import { Subgroup } from "./base/Subgroup";
import { SubgroupService } from "./subgroup.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Subgroup)
export class SubgroupResolver extends SubgroupResolverBase {
  constructor(
    protected readonly service: SubgroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
