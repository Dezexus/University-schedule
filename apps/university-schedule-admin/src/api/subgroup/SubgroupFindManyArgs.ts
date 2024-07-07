import { SubgroupWhereInput } from "./SubgroupWhereInput";
import { SubgroupOrderByInput } from "./SubgroupOrderByInput";

export type SubgroupFindManyArgs = {
  where?: SubgroupWhereInput;
  orderBy?: Array<SubgroupOrderByInput>;
  skip?: number;
  take?: number;
};
