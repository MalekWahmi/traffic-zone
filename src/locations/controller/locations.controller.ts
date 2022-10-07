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
} from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { locationsEntity } from "src/entities/locations.entity";
import { LocationsDTO } from "../locations.dto";
import { LocationsService } from "../services/locations.service";
@ApiTags("Locations")
@Controller("api/TrafficZone/locations")
export class LocationsController {
  constructor(private locationsService: LocationsService) {}
  @ApiOkResponse({
    type: locationsEntity,
    description: "Api to fetch all locations",
  })
  @Get()
  async fetchLocations() {
    const accidents = await this.locationsService.fetchAllLocations();
    return {
      statusCode: HttpStatus.OK,
      message: "Locations fetched successfully",
      accidents,
    };
  }

  @Post("create")
  @ApiOkResponse({
    type: locationsEntity,
    description: "Api to create location",
  })
  async createLocation(@Body() data: LocationsDTO) {
    const accident = await this.locationsService.create(data);
    return {
      statusCode: HttpStatus.OK,
      message: "Location created successfully",
      accident,
    };
  }
  @Get(":id")
  @ApiOkResponse({
    type: locationsEntity,
    description: "Api to update get by id",
  })
  async getLocation(
    @Param("id", ParseIntPipe)
    id: number
  ) {
    const data = await this.locationsService.getLocationById(id);
    return {
      statusCode: HttpStatus.OK,
      message: "Locations fetched successfully",
      data,
    };
  }
  @Put(":id")
  @ApiOkResponse({
    type: locationsEntity,
    description: "Api to update location by id",
  })
  async updateLocation(
    @Param("id", ParseIntPipe) id: number,
    @Body() data: Partial<LocationsDTO>
  ) {
    await this.locationsService.update(id, data);
    return {
      statusCode: HttpStatus.OK,
      message: "Location updated successfully",
    };
  }
  @Put("activate/:id")
  @ApiOkResponse({
    type: locationsEntity,
    description: "Api to activate location by id",
  })
  async activateLocation(
    @Param("id", ParseIntPipe) id: number,
    @Body() activate: Partial<LocationsDTO>
  ) {
    let newActivate = !activate;
    await this.locationsService.activateLocations(id, {
      activate: newActivate,
    });

    return {
      statusCode: HttpStatus.OK,
      message: "Location activated successfully",
    };
  }

  @Delete(":id")
  @ApiOkResponse({
    type: locationsEntity,
    description: "Api to delete location by id",
  })
  async deleteLocation(@Param("id", ParseIntPipe) id: number) {
    await this.locationsService.destroy(id);
    return {
      statusCode: HttpStatus.OK,
      message: "Location deleted successfully",
    };
  }
}
