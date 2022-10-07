import { locationsEntity } from "src/entities/locations.entity";
import { Repository } from "typeorm";
import { LocationsDTO } from "../locations.dto";
export declare class AccidentsService {
    private userRepository;
    constructor(userRepository: Repository<locationsEntity>);
    fetchAllLocations(): Promise<locationsEntity[]>;
    create(data: LocationsDTO): Promise<locationsEntity>;
    getLocationById(id: number): Promise<locationsEntity>;
    update(id: number, data: Partial<LocationsDTO>): Promise<void>;
    destroy(id: number): Promise<{
        deleted: boolean;
    }>;
}
