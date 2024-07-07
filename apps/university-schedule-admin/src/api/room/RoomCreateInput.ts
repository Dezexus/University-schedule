import { ClassModelCreateNestedManyWithoutRoomsInput } from "./ClassModelCreateNestedManyWithoutRoomsInput";

export type RoomCreateInput = {
  name?: string | null;
  capacity?: number | null;
  classes?: ClassModelCreateNestedManyWithoutRoomsInput;
};
