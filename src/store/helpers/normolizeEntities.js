import { normalizedRestaurants } from "../../constants/normalized-fixtures";

export const normolizeEntities = (entities, idFieldName = "id") => ({
  entities: entities.reduce((acc, entity) => {
    acc[entity[idFieldName]] = entity;

    return acc;
  }, {}),
  ids: entities.map((entity) => entity[idFieldName]),
});
