import { BellSchedule as TBellSchedule } from "../api/bellSchedule/BellSchedule";

export const BELLSCHEDULE_TITLE_FIELD = "id";

export const BellScheduleTitle = (record: TBellSchedule): string => {
  return record.id?.toString() || String(record.id);
};
