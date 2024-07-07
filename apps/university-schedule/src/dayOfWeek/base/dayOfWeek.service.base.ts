/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  DayOfWeek as PrismaDayOfWeek,
  ClassModel as PrismaClassModel,
} from "@prisma/client";

export class DayOfWeekServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DayOfWeekCountArgs, "select">
  ): Promise<number> {
    return this.prisma.dayOfWeek.count(args);
  }

  async dayOfWeeks(
    args: Prisma.DayOfWeekFindManyArgs
  ): Promise<PrismaDayOfWeek[]> {
    return this.prisma.dayOfWeek.findMany(args);
  }
  async dayOfWeek(
    args: Prisma.DayOfWeekFindUniqueArgs
  ): Promise<PrismaDayOfWeek | null> {
    return this.prisma.dayOfWeek.findUnique(args);
  }
  async createDayOfWeek(
    args: Prisma.DayOfWeekCreateArgs
  ): Promise<PrismaDayOfWeek> {
    return this.prisma.dayOfWeek.create(args);
  }
  async updateDayOfWeek(
    args: Prisma.DayOfWeekUpdateArgs
  ): Promise<PrismaDayOfWeek> {
    return this.prisma.dayOfWeek.update(args);
  }
  async deleteDayOfWeek(
    args: Prisma.DayOfWeekDeleteArgs
  ): Promise<PrismaDayOfWeek> {
    return this.prisma.dayOfWeek.delete(args);
  }

  async findClasses(
    parentId: string,
    args: Prisma.ClassModelFindManyArgs
  ): Promise<PrismaClassModel[]> {
    return this.prisma.dayOfWeek
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .classes(args);
  }
}
