import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { ClassModelUpdateManyWithoutSubgroupsInput } from "./ClassModelUpdateManyWithoutSubgroupsInput";

export type SubgroupUpdateInput = {
  name?: string | null;
  group?: GroupWhereUniqueInput | null;
  classes?: ClassModelUpdateManyWithoutSubgroupsInput;
};
