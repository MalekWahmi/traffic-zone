import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { log } from "console";
import { boolean } from "joi";
import { accidentEntity } from "src/entities/accidents.entity.";
import { Repository } from "typeorm";
import { AccidentsDTO } from "../accidents.dto";
@Injectable()
export class AccidentsService {
  constructor(
    @InjectRepository(accidentEntity)
    private accidentsRepository: Repository<accidentEntity>
  ) {}

  async showAllAccident(): Promise<accidentEntity[]> {
    return await this.accidentsRepository.find();
  }
  async getAccidentById(id: number) {
    return await this.accidentsRepository.findOne({ where: { id: id } });
  }
  async getAccidentByLocation(locationId: number) {
    return await this.accidentsRepository.findOne({
      where: { id: locationId },
    });
  }
  async create(data: Partial<AccidentsDTO>) {
    const accident = this.accidentsRepository.create({ data });
    await this.accidentsRepository.save(data);
    return accident;
  }

  async update(id: number, data: Partial<accidentEntity>) {
    await this.accidentsRepository.update({ id }, data);
  }
  async activateAccidents(id: number, activate: Partial<AccidentsDTO>) {
    await this.accidentsRepository.update({ id }, activate);
  }

  async destroy(id: number) {
    await this.accidentsRepository.delete({ id });
    return { deleted: true };
  }
}
