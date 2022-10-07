import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { accidentEntity } from "./entities/accidents.entity.";
import { locationsEntity } from "./entities/locations.entity";
import { AccidentsModule } from "./accidents/accidents.module";
import { LocationsModule } from "./locations/locations.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "",
      password: "",
      database: "traffic_zone",
      entities: [accidentEntity, locationsEntity, "dist//*entity.ts"],
      synchronize: true,
    }),
    AccidentsModule,
    LocationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
