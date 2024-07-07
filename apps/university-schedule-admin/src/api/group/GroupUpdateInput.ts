import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { SubgroupUpdateManyWithoutGroupsInput } from "./SubgroupUpdateManyWithoutGroupsInput";

export type GroupUpdateInput = {
  name?: string | null;
  department?: DepartmentWhereUniqueInput | null;
  subgroups?: SubgroupUpdateManyWithoutGroupsInput;
};
