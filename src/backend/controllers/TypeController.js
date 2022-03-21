import { Response } from "miragejs";

/**
 * All the routes related to Product Type are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles gets all product types in the db.
 * send GET Request at /api/types
 * */

export const getAllTypesHandler = function () {
  try {
    return new Response(200, {}, { types: this.db.types });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles gets all product types in the db.
 * send GET Request at /api/user/type/:TypeId
 * */

export const getTypeHandler = function (schema, request) {
  const TypeId = request.params.TypeId;
  try {
    const type = schema.types.findBy({ _id: TypeId });
    return new Response(200, {}, { type });
  } catch (error) {
    new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
