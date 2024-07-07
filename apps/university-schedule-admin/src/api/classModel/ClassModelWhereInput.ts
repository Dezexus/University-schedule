import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { SubjectWhereUniqueInput } from "../subject/SubjectWhereUniqueInput";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SubgroupWhereUniqueInput } from "../subgroup/SubgroupWhereUniqueInput";
import { DayOfWeekWhereUniqueInput } from "../dayOfWeek/DayOfWeekWhereUniqueInput";

export type ClassModelWhereInput = {
  id?: StringFilter;
  startTime?: DateTimeNullableFilter;
  endTime?: DateTimeNullableFilter;
  subject?: SubjectWhereUniqueInput;
  room?: RoomWhereUniqueInput;
  typeField?: StringNullableFilter;
  teacher?: StringNullableFilter;
  subgroup?: SubgroupWhereUniqueInput;
  dayOfWeek?: DayOfWeekWhereUniqueInput;
};
