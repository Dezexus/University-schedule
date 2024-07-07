import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type BellScheduleWhereInput = {
  id?: StringFilter;
  numberField?: IntNullableFilter;
  endTime?: DateTimeNullableFilter;
  startTime?: DateTimeNullableFilter;
};
