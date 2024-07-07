import { ClassModelCreateNestedManyWithoutDayOfWeeksInput } from "./ClassModelCreateNestedManyWithoutDayOfWeeksInput";

export type DayOfWeekCreateInput = {
  classes?: ClassModelCreateNestedManyWithoutDayOfWeeksInput;
  name?: string | null;
};
