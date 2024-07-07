import { Group } from "../group/Group";
import { Subject } from "../subject/Subject";

export type Department = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  groups?: Array<Group>;
  subjects?: Array<Subject>;
};
