import { BellScheduleWhereInput } from "./BellScheduleWhereInput";
import { BellScheduleOrderByInput } from "./BellScheduleOrderByInput";

export type BellScheduleFindManyArgs = {
  where?: BellScheduleWhereInput;
  orderBy?: Array<BellScheduleOrderByInput>;
  skip?: number;
  take?: number;
};
