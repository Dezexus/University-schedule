import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { SubjectTitle } from "../subject/SubjectTitle";
import { RoomTitle } from "../room/RoomTitle";
import { SubgroupTitle } from "../subgroup/SubgroupTitle";
import { DayOfWeekTitle } from "../dayOfWeek/DayOfWeekTitle";

export const ClassModelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="start_time" source="startTime" />
        <DateTimeInput label="end_time" source="endTime" />
        <ReferenceInput source="subject.id" reference="Subject" label="subject">
          <SelectInput optionText={SubjectTitle} />
        </ReferenceInput>
        <ReferenceInput source="room.id" reference="Room" label="room">
          <SelectInput optionText={RoomTitle} />
        </ReferenceInput>
        <TextInput label="type" source="typeField" />
        <TextInput label="teacher" source="teacher" />
        <ReferenceInput
          source="subgroup.id"
          reference="Subgroup"
          label="subgroup"
        >
          <SelectInput optionText={SubgroupTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="dayOfWeek.id"
          reference="DayOfWeek"
          label="day_of_week"
        >
          <SelectInput optionText={DayOfWeekTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
