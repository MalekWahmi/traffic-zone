import { HttpStatus } from "@nestjs/common";
import { AccidentsDTO } from "src/accidents/accidents.dto";
import { AccidentsService } from "src/accidents/services/accidents.service";
export declare class AccidentsController {
    private accidentsService;
    constructor(accidentsService: AccidentsService);
    fetchllAccidents(): Promise<{
        statusCode: HttpStatus;
        message: string;
        accidents: import("../../entities/accidents.entity.").accidentEntity[];
    }>;
    create(data: AccidentsDTO): Promise<{
        statusCode: HttpStatus;
        message: string;
        accident: import("../../entities/accidents.entity.").accidentEntity;
    }>;
    getAccident(id: number): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: import("../../entities/accidents.entity.").accidentEntity;
    }>;
    uppdateUser(id: number, data: Partial<AccidentsDTO>): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    deleteAccident(id: number): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
}
