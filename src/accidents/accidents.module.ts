import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { accidentEntity } from "src/entities/accidents.entity.";

import { AccidentsController } from "./controllers/accidents.controller";
import { AccidentsService } from "./services/accidents.service";

@Module({
  imports: [TypeOrmModule.forFeature([accidentEntity])],
  controllers: [AccidentsController],
  providers: [AccidentsService],
})
export class AccidentsModule {}
