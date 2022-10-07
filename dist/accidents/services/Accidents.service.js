"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccidentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const accidents_entity_1 = require("../../entities/accidents.entity.");
const typeorm_2 = require("typeorm");
let AccidentsService = class AccidentsService {
    constructor(accidentsRepository) {
        this.accidentsRepository = accidentsRepository;
    }
    async showAllAccident() {
        return await this.accidentsRepository.find();
    }
    async getAccidentById(id) {
        return await this.accidentsRepository.findOne({ where: { id: id } });
    }
    async getAccidentByLocation(locationId) {
        return await this.accidentsRepository.findOne({
            where: { id: locationId },
        });
    }
    async create(data) {
        const accident = this.accidentsRepository.create({ data });
        await this.accidentsRepository.save(data);
        return accident;
    }
    async update(id, data) {
        await this.accidentsRepository.update({ id }, data);
    }
    async activateAccidents(id, activate) {
        await this.accidentsRepository.update({ id }, activate);
    }
    async destroy(id) {
        await this.accidentsRepository.delete({ id });
        return { deleted: true };
    }
};
AccidentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(accidents_entity_1.accidentEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AccidentsService);
exports.AccidentsService = AccidentsService;
//# sourceMappingURL=accidents.service.js.map