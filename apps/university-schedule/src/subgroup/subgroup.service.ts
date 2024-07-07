import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SubgroupServiceBase } from "./base/subgroup.service.base";

@Injectable()
export class SubgroupService extends SubgroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
