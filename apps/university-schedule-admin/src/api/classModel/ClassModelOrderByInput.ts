import { SortOrder } from "../../util/SortOrder";

export type ClassModelOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  startTime?: SortOrder;
  endTime?: SortOrder;
  subjectId?: SortOrder;
  roomId?: SortOrder;
  typeField?: SortOrder;
  teacher?: SortOrder;
  subgroupId?: SortOrder;
  dayOfWeekId?: SortOrder;
};
