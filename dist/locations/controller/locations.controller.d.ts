import { HttpStatus } from "@nestjs/common";
import { locationsEntity } from "src/entities/locations.entity";
import { LocationsDTO } from "../locations.dto";
import { LocationsService } from "../services/locations.service";
export declare class LocationsController {
    private locationsService;
    constructor(locationsService: LocationsService);
    fetchLocations(): Promise<{
        statusCode: HttpStatus;
        message: string;
        accidents: locationsEntity[];
    }>;
    createLocation(data: LocationsDTO): Promise<{
        statusCode: HttpStatus;
        message: string;
        accident: locationsEntity;
    }>;
    getLocation(id: number): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: locationsEntity;
    }>;
    updateLocation(id: number, data: Partial<LocationsDTO>): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    activateLocation(id: number, activate: Partial<LocationsDTO>): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    deleteLocation(id: number): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
}
