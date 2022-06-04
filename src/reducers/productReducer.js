import {products} from "../data/products.json";

const initState = {
  products: products,
  product: {},
  filteredProducts:[],
};
const productReducer = (state = initState, action) => {
  switch (action.type) {
    case "PRODUCT":
      return {
        ...state,
        product: state.products.find(
          (product) => parseInt(product.id) === parseInt(action.id)
        ),
      };
    case "SEARCH":
      // eslint-disable-next-line
      const filterProducts = state.products.filter((product) => {
        if (
          product.description.toLowerCase().includes(action.payload) ||
          product.title.toLowerCase().includes(action.payload)
        ) {
          return product;
        }
      });
      console.log(filterProducts);
      return {
        ...state,
        filteredProducts: filterProducts,
      };
    default:
      return state;
  }
};
export default productReducer;
