import { Subject } from "../subject/Subject";
import { Room } from "../room/Room";
import { Subgroup } from "../subgroup/Subgroup";
import { DayOfWeek } from "../dayOfWeek/DayOfWeek";

export type ClassModel = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  startTime: Date | null;
  endTime: Date | null;
  subject?: Subject | null;
  room?: Room | null;
  typeField: string | null;
  teacher: string | null;
  subgroup?: Subgroup | null;
  dayOfWeek?: DayOfWeek | null;
};
