import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { SUBJECT_TITLE_FIELD } from "../subject/SubjectTitle";
import { ROOM_TITLE_FIELD } from "../room/RoomTitle";
import { SUBGROUP_TITLE_FIELD } from "../subgroup/SubgroupTitle";
import { DAYOFWEEK_TITLE_FIELD } from "../dayOfWeek/DayOfWeekTitle";

export const ClassModelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="start_time" source="startTime" />
        <TextField label="end_time" source="endTime" />
        <ReferenceField label="subject" source="subject.id" reference="Subject">
          <TextField source={SUBJECT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="room" source="room.id" reference="Room">
          <TextField source={ROOM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="type" source="typeField" />
        <TextField label="teacher" source="teacher" />
        <ReferenceField
          label="subgroup"
          source="subgroup.id"
          reference="Subgroup"
        >
          <TextField source={SUBGROUP_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="day_of_week"
          source="dayofweek.id"
          reference="DayOfWeek"
        >
          <TextField source={DAYOFWEEK_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
