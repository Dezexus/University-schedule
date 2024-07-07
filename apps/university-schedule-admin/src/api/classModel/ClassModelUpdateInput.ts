import { SubjectWhereUniqueInput } from "../subject/SubjectWhereUniqueInput";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { SubgroupWhereUniqueInput } from "../subgroup/SubgroupWhereUniqueInput";
import { DayOfWeekWhereUniqueInput } from "../dayOfWeek/DayOfWeekWhereUniqueInput";

export type ClassModelUpdateInput = {
  startTime?: Date | null;
  endTime?: Date | null;
  subject?: SubjectWhereUniqueInput | null;
  room?: RoomWhereUniqueInput | null;
  typeField?: string | null;
  teacher?: string | null;
  subgroup?: SubgroupWhereUniqueInput | null;
  dayOfWeek?: DayOfWeekWhereUniqueInput | null;
};
