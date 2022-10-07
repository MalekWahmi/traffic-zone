import { HttpStatus } from "@nestjs/common";
import { AccidentsDTO } from "src/accidents/accidents.dto";
import { AccidentsService } from "src/accidents/services/accidents.service";
import { accidentEntity } from "src/entities/accidents.entity.";
export declare class AccidentsController {
    private accidentsService;
    constructor(accidentsService: AccidentsService);
    fetchllAccidents(): Promise<{
        statusCode: HttpStatus;
        message: string;
        accidents: accidentEntity[];
    }>;
    getAccidents(id: number): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: accidentEntity;
    }>;
    fetchAccidentBylocation(locationId: number): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: accidentEntity;
    }>;
    create(data: AccidentsDTO): Promise<{
        statusCode: HttpStatus;
        message: string;
        accident: accidentEntity & accidentEntity[];
    }>;
    uppdateAccident(id: number, data: Partial<AccidentsDTO>): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    updateLocation(id: number, activated: Partial<AccidentsDTO>): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    deleteAccident(id: number): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
}
