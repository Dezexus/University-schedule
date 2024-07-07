import { ClassModel } from "../classModel/ClassModel";

export type DayOfWeek = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  classes?: Array<ClassModel>;
  name: string | null;
};
