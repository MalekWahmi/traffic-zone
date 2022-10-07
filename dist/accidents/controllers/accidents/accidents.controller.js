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
const accidents_service_1 = require("../../services/accidents.service");
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
    async create(data) {
        const accident = await this.accidentsService.create(data);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: "Accident created successfully",
            accident,
        };
    }
    async getAccident(id) {
        const data = await this.accidentsService.getAccidentById(id);
        console.log("Accident", data);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: "Accident fetched successfully",
            data,
        };
    }
    async uppdateUser(id, data) {
        await this.accidentsService.update(id, data);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: "Accident updated successfully",
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
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AccidentsController.prototype, "fetchllAccidents", null);
__decorate([
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AccidentsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AccidentsController.prototype, "getAccident", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AccidentsController.prototype, "uppdateUser", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AccidentsController.prototype, "deleteAccident", null);
AccidentsController = __decorate([
    (0, common_1.Controller)("accidents"),
    __metadata("design:paramtypes", [accidents_service_1.AccidentsService])
], AccidentsController);
exports.AccidentsController = AccidentsController;
//# sourceMappingURL=accidents.controller.js.map