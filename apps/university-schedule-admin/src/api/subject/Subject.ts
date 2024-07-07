import { ClassModel } from "../classModel/ClassModel";
import { Department } from "../department/Department";

export type Subject = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  classes?: Array<ClassModel>;
  name: string | null;
  department?: Department | null;
};
