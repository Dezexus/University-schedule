import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { RoomList } from "./room/RoomList";
import { RoomCreate } from "./room/RoomCreate";
import { RoomEdit } from "./room/RoomEdit";
import { RoomShow } from "./room/RoomShow";
import { DepartmentList } from "./department/DepartmentList";
import { DepartmentCreate } from "./department/DepartmentCreate";
import { DepartmentEdit } from "./department/DepartmentEdit";
import { DepartmentShow } from "./department/DepartmentShow";
import { SubgroupList } from "./subgroup/SubgroupList";
import { SubgroupCreate } from "./subgroup/SubgroupCreate";
import { SubgroupEdit } from "./subgroup/SubgroupEdit";
import { SubgroupShow } from "./subgroup/SubgroupShow";
import { GroupList } from "./group/GroupList";
import { GroupCreate } from "./group/GroupCreate";
import { GroupEdit } from "./group/GroupEdit";
import { GroupShow } from "./group/GroupShow";
import { ClassTypeList } from "./classType/ClassTypeList";
import { ClassTypeCreate } from "./classType/ClassTypeCreate";
import { ClassTypeEdit } from "./classType/ClassTypeEdit";
import { ClassTypeShow } from "./classType/ClassTypeShow";
import { SubjectList } from "./subject/SubjectList";
import { SubjectCreate } from "./subject/SubjectCreate";
import { SubjectEdit } from "./subject/SubjectEdit";
import { SubjectShow } from "./subject/SubjectShow";
import { ClassModelList } from "./classModel/ClassModelList";
import { ClassModelCreate } from "./classModel/ClassModelCreate";
import { ClassModelEdit } from "./classModel/ClassModelEdit";
import { ClassModelShow } from "./classModel/ClassModelShow";
import { DayOfWeekList } from "./dayOfWeek/DayOfWeekList";
import { DayOfWeekCreate } from "./dayOfWeek/DayOfWeekCreate";
import { DayOfWeekEdit } from "./dayOfWeek/DayOfWeekEdit";
import { DayOfWeekShow } from "./dayOfWeek/DayOfWeekShow";
import { BellScheduleList } from "./bellSchedule/BellScheduleList";
import { BellScheduleCreate } from "./bellSchedule/BellScheduleCreate";
import { BellScheduleEdit } from "./bellSchedule/BellScheduleEdit";
import { BellScheduleShow } from "./bellSchedule/BellScheduleShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"University-Schedule"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Room"
          list={RoomList}
          edit={RoomEdit}
          create={RoomCreate}
          show={RoomShow}
        />
        <Resource
          name="Department"
          list={DepartmentList}
          edit={DepartmentEdit}
          create={DepartmentCreate}
          show={DepartmentShow}
        />
        <Resource
          name="Subgroup"
          list={SubgroupList}
          edit={SubgroupEdit}
          create={SubgroupCreate}
          show={SubgroupShow}
        />
        <Resource
          name="Group"
          list={GroupList}
          edit={GroupEdit}
          create={GroupCreate}
          show={GroupShow}
        />
        <Resource
          name="ClassType"
          list={ClassTypeList}
          edit={ClassTypeEdit}
          create={ClassTypeCreate}
          show={ClassTypeShow}
        />
        <Resource
          name="Subject"
          list={SubjectList}
          edit={SubjectEdit}
          create={SubjectCreate}
          show={SubjectShow}
        />
        <Resource
          name="ClassModel"
          list={ClassModelList}
          edit={ClassModelEdit}
          create={ClassModelCreate}
          show={ClassModelShow}
        />
        <Resource
          name="DayOfWeek"
          list={DayOfWeekList}
          edit={DayOfWeekEdit}
          create={DayOfWeekCreate}
          show={DayOfWeekShow}
        />
        <Resource
          name="BellSchedule"
          list={BellScheduleList}
          edit={BellScheduleEdit}
          create={BellScheduleCreate}
          show={BellScheduleShow}
        />
      </Admin>
    </div>
  );
};

export default App;
