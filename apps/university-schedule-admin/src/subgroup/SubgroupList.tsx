import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { GROUP_TITLE_FIELD } from "../group/GroupTitle";

export const SubgroupList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Subgroups"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <ReferenceField label="Group" source="group.id" reference="Group">
          <TextField source={GROUP_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
