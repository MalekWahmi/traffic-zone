import { accidentEntity } from "src/entities/accidents.entity.";
import { Repository } from "typeorm";
import { AccidentsDTO } from "../accidents.dto";
export declare class AccidentsService {
    private accidentsRepository;
    constructor(accidentsRepository: Repository<accidentEntity>);
    showAllAccident(): Promise<accidentEntity[]>;
    getAccidentById(id: number): Promise<accidentEntity>;
    getAccidentByLocation(locationId: number): Promise<accidentEntity>;
    create(data: Partial<AccidentsDTO>): Promise<accidentEntity & accidentEntity[]>;
    update(id: number, data: Partial<accidentEntity>): Promise<void>;
    activateAccidents(id: number, activate: Partial<AccidentsDTO>): Promise<void>;
    destroy(id: number): Promise<{
        deleted: boolean;
    }>;
}
