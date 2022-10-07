import { HttpStatus } from "@nestjs/common";
import { LocationsDTO } from "./locations.dto";
import { LocationsService } from "./services/locations.service";
export declare class LocationsController {
    private locationsService;
    constructor(locationsService: LocationsService);
    fetchllLocations(): Promise<{
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
    activateLocation(id: number, data: Partial<LocationsDTO>): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    updateLocation(id: number, data: Partial<LocationsDTO>): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    deleteLocation(id: number): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
}
