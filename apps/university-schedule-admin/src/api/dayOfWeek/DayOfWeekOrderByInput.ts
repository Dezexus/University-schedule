import { SortOrder } from "../../util/SortOrder";

export type DayOfWeekOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
};
