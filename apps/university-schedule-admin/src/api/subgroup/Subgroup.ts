import { Group } from "../group/Group";
import { ClassModel } from "../classModel/ClassModel";

export type Subgroup = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  group?: Group | null;
  classes?: Array<ClassModel>;
};
