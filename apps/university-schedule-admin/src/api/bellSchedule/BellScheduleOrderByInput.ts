import { SortOrder } from "../../util/SortOrder";

export type BellScheduleOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  numberField?: SortOrder;
  endTime?: SortOrder;
  startTime?: SortOrder;
};
