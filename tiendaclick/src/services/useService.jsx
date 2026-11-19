import { request } from "./api";

export const useService = {

  getAllProducts: () => {
    return request("");
  },

  getProductById: (id) => {
    return request(`/product/${id}`);
  }

};