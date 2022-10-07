import { Test } from "@nestjs/testing";
import { LocationsService } from "../services/locations.service";

import { LocationsController } from "./locations.controller";

describe("CatsController", () => {
  let catsController: LocationsController;
  let catsService: LocationsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [LocationsController],
      providers: [LocationsService],
    }).compile();

    catsService = moduleRef.get<LocationsService>(LocationsService);
    catsController = moduleRef.get<LocationsController>(LocationsController);
  });

  describe("fetchAllLocations", () => {
    it("should return an array of cats", async () => {
      const result = ["test"];
      jest.spyOn(catsService, "fetchAllLocations");
      // .mockImplementation(() => result);

      expect(await catsController.fetchLocations()).toBe(result);
    });
  });
});
