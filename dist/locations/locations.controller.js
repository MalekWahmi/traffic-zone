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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationsController = void 0;
const common_1 = require("@nestjs/common");
const locations_service_1 = require("./services/locations.service");
let LocationsController = class LocationsController {
    constructor(locationsService) {
        this.locationsService = locationsService;
    }
    async fetchllLocations() {
        console.log("here");
        const accidents = await this.locationsService.fetchAllLocations();
        return {
            statusCode: common_1.HttpStatus.OK,
            message: "Accidents fetched successfully",
            accidents,
        };
    }
    async createLocation(data) {
        const accident = await this.locationsService.create(data);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: "Location created successfully",
            accident,
        };
    }
    async getLocation(id) {
        const data = await this.locationsService.getLocationById(id);
        console.log("Accident", data);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: "Locations fetched successfully",
            data,
        };
    }
    async activateLocation(id, data) {
        await this.locationsService.activateLocations(id, data);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: "Location updated successfully",
        };
    }
    async updateLocation(id, data) {
        await this.locationsService.activateLocations(id, data);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: "Location updated successfully",
        };
    }
    async deleteLocation(id) {
        await this.locationsService.destroy(id);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: "Location deleted successfully",
        };
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LocationsController.prototype, "fetchllLocations", null);
__decorate([
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LocationsController.prototype, "createLocation", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LocationsController.prototype, "getLocation", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], LocationsController.prototype, "activateLocation", null);
__decorate([
    (0, common_1.Put)("activate"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], LocationsController.prototype, "updateLocation", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LocationsController.prototype, "deleteLocation", null);
LocationsController = __decorate([
    (0, common_1.Controller)("locations"),
    __metadata("design:paramtypes", [typeof (_a = typeof locations_service_1.LocationsService !== "undefined" && locations_service_1.LocationsService) === "function" ? _a : Object])
], LocationsController);
exports.LocationsController = LocationsController;
//# sourceMappingURL=locations.controller.js.map