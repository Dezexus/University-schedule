import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { RoomModule } from "./room/room.module";
import { DepartmentModule } from "./department/department.module";
import { SubgroupModule } from "./subgroup/subgroup.module";
import { GroupModule } from "./group/group.module";
import { ClassTypeModule } from "./classType/classType.module";
import { SubjectModule } from "./subject/subject.module";
import { ClassModelModule } from "./classModel/classModel.module";
import { DayOfWeekModule } from "./dayOfWeek/dayOfWeek.module";
import { BellScheduleModule } from "./bellSchedule/bellSchedule.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UserModule,
    RoomModule,
    DepartmentModule,
    SubgroupModule,
    GroupModule,
    ClassTypeModule,
    SubjectModule,
    ClassModelModule,
    DayOfWeekModule,
    BellScheduleModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
