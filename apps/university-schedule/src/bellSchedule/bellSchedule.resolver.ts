import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BellScheduleResolverBase } from "./base/bellSchedule.resolver.base";
import { BellSchedule } from "./base/BellSchedule";
import { BellScheduleService } from "./bellSchedule.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BellSchedule)
export class BellScheduleResolver extends BellScheduleResolverBase {
  constructor(
    protected readonly service: BellScheduleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
