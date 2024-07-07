import { Department } from "../department/Department";
import { Subgroup } from "../subgroup/Subgroup";

export type Group = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  department?: Department | null;
  subgroups?: Array<Subgroup>;
};
