import {products} from "../data/products.json";


const productsFromLocalStorage = JSON.parse(
  localStorage.getItem("productsInCart") || "[]"
);
console.log(productsFromLocalStorage);
var totalPriceFromLocalStorage = 0;
for (let i = 0; i < productsFromLocalStorage.length; i++) {
  totalPriceFromLocalStorage +=
    parseInt(productsFromLocalStorage[i].price) * productsFromLocalStorage[i].quantity;
}

var totalQuantityFromLocalStorage = 0;
for (let i = 0; i < productsFromLocalStorage.length; i++) {
  totalQuantityFromLocalStorage += productsFromLocalStorage[i].quantity;
}

const ordersFromLocalStorage = JSON.parse(
  localStorage.getItem("recentOrder") || "[]"
);
console.log(ordersFromLocalStorage);


const my_orders = JSON.parse(
  localStorage.getItem("myOrders") || "[]"
);


const initialState = {
  products: products,
  cartProducts: productsFromLocalStorage,
  totalPrice: totalPriceFromLocalStorage,
  totalQuantities: totalQuantityFromLocalStorage,
  recentOrder: ordersFromLocalStorage,
  myOrders: my_orders,
};

const cartReducer = (state = initialState, action) => {
  let findPro;
  let index;
  switch (action.type) {
    case "ADD_TO_CART":
      const { product, quantity } = action.payload;
      const check = state.cartProducts.find((pr) => pr.id === product.id);
      if (check) {
        return state;
      } else {
        const Tprice = state.totalPrice + parseInt(product.price) * quantity;
        const Tquantities = state.totalQuantities + quantity;
        product.quantity = quantity;
        return {
          ...state,
          cartProducts: [...state.cartProducts, product],
          totalPrice: Tprice,
          totalQuantities: Tquantities,
        };
      }
    case "INC":
      findPro = state.cartProducts.find(
        (product) => product.id === action.payload
      );
      index = state.cartProducts.findIndex(
        (product) => product.id === action.payload
      );
      findPro.quantity += 1;
      state.cartProducts[index] = findPro;
      return {
        ...state,
        totalPrice: state.totalPrice + parseInt(findPro.price),
        totalQuantities: state.totalQuantities + 1,
      };
    case "DEC":
      findPro = state.cartProducts.find(
        (product) => product.id === action.payload
      );
      index = state.cartProducts.findIndex(
        (product) => product.id === action.payload
      );
      if (findPro.quantity > 1) {
        findPro.quantity -= 1;
        state.cartProducts[index] = findPro;
        return {
          ...state,
          totalPrice: state.totalPrice - parseInt(findPro.price),
          totalQuantities: state.totalQuantities - 1,
        };
      } else {
        return state;
      }
    case "REMOVE":
      findPro = state.cartProducts.find(
        (product) => product.id === action.payload
      );
      const filtered = state.cartProducts.filter(
        (product) => product.id !== action.payload
      );
      return {
        ...state,
        cartProducts: filtered,
        totalPrice:
          state.totalPrice - parseInt(findPro.price) * findPro.quantity,
        totalQuantities: state.totalQuantities - findPro.quantity,
      };
    case "EMPTY_CART":
      const a = state.myOrders
      a.push(action.payload)
      localStorage.setItem("myOrders", JSON.stringify(a));
      return {
        ...state,
        // myOrders: allOrders,
        cartProducts: [],
        totalPrice: 0,
      }
    
    default:
      return state;
  }
};
export default cartReducer;
