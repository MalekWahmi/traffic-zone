"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const accidents_entity_1 = require("./entities/accidents.entity.");
const locations_entity_1 = require("./entities/locations.entity");
const accidents_module_1 = require("./accidents/accidents.module");
const locations_module_1 = require("./locations/locations.module");
const nestjs_dotenv_1 = require("nestjs-dotenv");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: "mysql",
                host: "localhost",
                port: 3305,
                username: "root",
                password: "root",
                database: "traffic_zone",
                entities: [accidents_entity_1.accidentEntity, locations_entity_1.locationsEntity, "dist//*entity.ts"],
                synchronize: true,
            }),
            accidents_module_1.AccidentsModule,
            locations_module_1.LocationsModule,
            nestjs_dotenv_1.ConfigModule.forRoot(),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map