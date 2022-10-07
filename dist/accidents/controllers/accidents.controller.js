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
exports.AccidentsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const accidents_dto_1 = require("../accidents.dto");
const accidents_service_1 = require("../services/accidents.service");
const accidents_entity_1 = require("../../entities/accidents.entity.");
const validation_1 = require("../../validation/validation");
let AccidentsController = class AccidentsController {
    constructor(accidentsService) {
        this.accidentsService = accidentsService;
    }
    async fetchllAccidents() {
        const accidents = await this.accidentsService.showAllAccident();
        return {
            statusCode: common_1.HttpStatus.OK,
            message: "Accidents fetched successfully",
            accidents,
        };
    }
    async getAccidents(id) {
        const data = await this.accidentsService.getAccidentById(id);
        console.log("Accident", data);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: "Accident fetched successfully",
            data,
        };
    }
    async fetchAccidentBylocation(locationId) {
        const data = await this.accidentsService.getAccidentByLocation(locationId);
        console.log("Accident", data);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: "Accident fetched  by location uccessfully",
            data,
        };
    }
    async create(data) {
        const accident = await this.accidentsService.create(data);
        console;
        return {
            statusCode: common_1.HttpStatus.OK,
            message: "Accident created successfully",
            accident,
        };
    }
    async uppdateAccident(id, data) {
        await this.accidentsService.update(id, data);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: "Accident updated successfully",
        };
    }
    async updateLocation(id, activated) {
        await this.accidentsService.activateAccidents(id, activated);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: "Location activated successfully",
        };
    }
    async deleteAccident(id) {
        await this.accidentsService.destroy(id);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: "Accident deleted successfully",
        };
    }
};
__decorate([
    (0, swagger_1.ApiOkResponse)({
        type: accidents_entity_1.accidentEntity,
        description: "Api to fetch accidents",
    }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AccidentsController.prototype, "fetchllAccidents", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, swagger_1.ApiOkResponse)({
        type: accidents_entity_1.accidentEntity,
        description: "Api to get accident by id",
    }),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AccidentsController.prototype, "getAccidents", null);
__decorate([
    (0, common_1.Get)("location/:locationId"),
    (0, swagger_1.ApiOkResponse)({
        type: accidents_entity_1.accidentEntity,
        description: "Api to get accident by location id",
    }),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AccidentsController.prototype, "fetchAccidentBylocation", null);
__decorate([
    (0, common_1.Post)("create"),
    (0, swagger_1.ApiOkResponse)({
        type: accidents_entity_1.accidentEntity,
        description: "Api to create accident",
    }),
    (0, common_1.UsePipes)(new validation_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [accidents_dto_1.AccidentsDTO]),
    __metadata("design:returntype", Promise)
], AccidentsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(":id"),
    (0, swagger_1.ApiOkResponse)({
        type: accidents_entity_1.accidentEntity,
        description: "Api to update accident by id",
    }),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AccidentsController.prototype, "uppdateAccident", null);
__decorate([
    (0, common_1.Put)("activate"),
    (0, swagger_1.ApiOkResponse)({
        type: accidents_entity_1.accidentEntity,
        description: "Api to activate and desactivate Accident",
    }),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AccidentsController.prototype, "updateLocation", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, swagger_1.ApiOkResponse)({
        type: accidents_entity_1.accidentEntity,
        description: "Api to delete Accident by id",
    }),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AccidentsController.prototype, "deleteAccident", null);
AccidentsController = __decorate([
    (0, swagger_1.ApiTags)("Accidents"),
    (0, common_1.Controller)("api/TrafficZone/accidents"),
    __metadata("design:paramtypes", [accidents_service_1.AccidentsService])
], AccidentsController);
exports.AccidentsController = AccidentsController;
//# sourceMappingURL=accidents.controller.js.map