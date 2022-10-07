import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpStatus,
  ParseIntPipe,
  UsePipes,
} from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";

import { AccidentsDTO } from "src/accidents/accidents.dto";
import { AccidentsService } from "src/accidents/services/accidents.service";
import { accidentEntity } from "src/entities/accidents.entity.";
import { LocationsService } from "src/locations/services/locations.service";
import { ValidationPipe } from "src/validation/validation";

@ApiTags("Accidents")
@Controller("api/TrafficZone/accidents")
export class AccidentsController {
  constructor(private accidentsService: AccidentsService) {}
  @ApiOkResponse({
    type: accidentEntity,
    description: "Api to fetch accidents",
  })
  @Get()
  async fetchllAccidents() {
    const accidents = await this.accidentsService.showAllAccident();
    return {
      statusCode: HttpStatus.OK,
      message: "Accidents fetched successfully",
      accidents,
    };
  }

  @Get(":id")
  @ApiOkResponse({
    type: accidentEntity,
    description: "Api to get accident by id",
  })
  async getAccidents(@Param("id", ParseIntPipe) id: number) {
    const data = await this.accidentsService.getAccidentById(id);

    console.log("Accident", data);
    return {
      statusCode: HttpStatus.OK,
      message: "Accident fetched successfully",
      data,
    };
  }

  @Get("location/:locationId")
  @ApiOkResponse({
    type: accidentEntity,
    description: "Api to get accident by location id",
  })
  async fetchAccidentBylocation(@Param("id", ParseIntPipe) locationId: number) {
    const data = await this.accidentsService.getAccidentByLocation(locationId);
    console.log("Accident", data);
    return {
      statusCode: HttpStatus.OK,
      message: "Accident fetched  by location uccessfully",
      data,
    };
  }

  @Post("create")
  @ApiOkResponse({
    type: accidentEntity,
    description: "Api to create accident",
  })
  @UsePipes(new ValidationPipe())
  async create(@Body() data: AccidentsDTO) {
    const accident = await this.accidentsService.create(data);
    console;
    return {
      statusCode: HttpStatus.OK,
      message: "Accident created successfully",
      accident,
    };
  }
  @Put(":id")
  @ApiOkResponse({
    type: accidentEntity,
    description: "Api to update accident by id",
  })
  async uppdateAccident(
    @Param("id", ParseIntPipe) id: number,
    @Body() data: Partial<AccidentsDTO>
  ) {
    await this.accidentsService.update(id, data);
    return {
      statusCode: HttpStatus.OK,
      message: "Accident updated successfully",
    };
  }
  @Put("activate")
  @ApiOkResponse({
    type: accidentEntity,
    description: "Api to activate and desactivate Accident",
  })
  async updateLocation(
    @Param("id", ParseIntPipe) id: number,
    @Body() activated: Partial<AccidentsDTO>
  ) {
    await this.accidentsService.activateAccidents(id, activated);
    return {
      statusCode: HttpStatus.OK,
      message: "Location activated successfully",
    };
  }

  @Delete(":id")
  @ApiOkResponse({
    type: accidentEntity,
    description: "Api to delete Accident by id",
  })
  async deleteAccident(@Param("id", ParseIntPipe) id: number) {
    await this.accidentsService.destroy(id);
    return {
      statusCode: HttpStatus.OK,
      message: "Accident deleted successfully",
    };
  }
}
