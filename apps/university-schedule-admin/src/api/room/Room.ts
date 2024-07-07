import { ClassModel } from "../classModel/ClassModel";

export type Room = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  capacity: number | null;
  classes?: Array<ClassModel>;
};
