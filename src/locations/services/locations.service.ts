import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { log } from "console";
import { locationsEntity } from "../../entities/locations.entity";
import { Repository } from "typeorm";
import { LocationsDTO } from "../locations.dto";

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(locationsEntity)
    private locationRepository: Repository<locationsEntity>
  ) {}

  async fetchAllLocations(): Promise<locationsEntity[]> {
    return await this.locationRepository.find();
  }
  async create(data: LocationsDTO) {
    const location = this.locationRepository.create(data);
    await this.locationRepository.save(data);
    return location;
  }

  async getLocationById(id: number) {
    return await this.locationRepository.findOne({ where: { id: id } });
  }

  async update(id: number, data: Partial<LocationsDTO>) {
    await this.locationRepository.update({ id }, data);
    // return await this.locationRepository.findOne({ id });
  }
  async activateLocations(id: number, activate: Partial<LocationsDTO>) {
    await this.locationRepository.update({ id }, activate);
  }

  async destroy(id: number) {
    await this.locationRepository.delete({ id });
    return { deleted: true };
  }
}
