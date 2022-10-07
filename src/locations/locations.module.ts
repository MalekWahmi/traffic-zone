import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { locationsEntity } from "src/entities/locations.entity";

import { LocationsController } from "./controller/locations.controller";
import { LocationsService } from "./services/locations.service";

@Module({
  imports: [TypeOrmModule.forFeature([locationsEntity])],
  controllers: [LocationsController],
  providers: [LocationsService],
})
export class LocationsModule {}
