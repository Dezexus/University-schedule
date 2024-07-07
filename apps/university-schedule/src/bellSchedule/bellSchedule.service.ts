import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BellScheduleServiceBase } from "./base/bellSchedule.service.base";

@Injectable()
export class BellScheduleService extends BellScheduleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
