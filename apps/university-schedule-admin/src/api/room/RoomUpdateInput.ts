import { ClassModelUpdateManyWithoutRoomsInput } from "./ClassModelUpdateManyWithoutRoomsInput";

export type RoomUpdateInput = {
  name?: string | null;
  capacity?: number | null;
  classes?: ClassModelUpdateManyWithoutRoomsInput;
};
