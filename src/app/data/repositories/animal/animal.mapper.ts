import { Mapper } from "../../../core/base/mapper";
import { AnimalModel } from "../../../core/models/animal.model";
import { AnimalEntity } from "./animal.entity";

export class AnimalImplementationRepositoryMapper extends Mapper <AnimalEntity, AnimalModel> {
  mapFrom(param: AnimalEntity): AnimalModel {
    return {
      name: param.name,
      age: param.age,
    };
  }

  mapTo(param: AnimalModel): AnimalEntity {
    return {
      id: "0",
      name: param.name,
      age: param.age,
    };
  }
}