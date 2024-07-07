import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClassTypeServiceBase } from "./base/classType.service.base";

@Injectable()
export class ClassTypeService extends ClassTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
