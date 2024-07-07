import { Subgroup as TSubgroup } from "../api/subgroup/Subgroup";

export const SUBGROUP_TITLE_FIELD = "name";

export const SubgroupTitle = (record: TSubgroup): string => {
  return record.name?.toString() || String(record.id);
};
