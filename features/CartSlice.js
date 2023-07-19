import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
  shipping: 0,
  promocode: 0,
  address: [],
  donation: 30,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state, action) => {
      state.user = [];
    },
    removeDonation: (state, action) => {
      state.donation = 0;
    },
    addPromo: (state, action) => {
      state.promocode = parseInt(action.payload);
      // state.promocode.push(action.payload);
      // parseInt(action.payload)
    },

    addAddress: (state, action) => {
      state.address.push(action.payload);
    },
    // addPromo: (state, action) => {
    //   state.promocode = [];
    //   state.promocode.push(action.payload);
    // },
    addRazorpayId: (state, action) => {
      state.paymentId = action.payload;
    },
    addDiscount: (state, action) => {
      state.discount = parseInt(action.payload);
    },
    addToCart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity = action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }
    },
    addDonation: (state, action) => {
      state.donation = parseInt(action.payload);
    },
    emptyCart: (state, action) => {
      (state.cart = []),
        (state.totalQuantity = 0),
        (state.totalPrice = 0),
        (state.shipping = 0),
        (state.address = []),
        (state.donation = 30);
    },
    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalmaxPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
      state.shipping = state.totalPrice < 1000 ? parseInt(150) : 0;
    },

    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decreaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    },
    updateQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: action.payload.quantity };
        }
        return item;
      });
    },
  },
});

export const {
  addToCart,
  addAddress,
  addPromo,
  addUser,
  getCartTotal,
  addDonation,
  removeItem,
  removeDonation,
  updateQuantity,
  increaseItemQuantity,
  decreaseItemQuantity,
  addRazorpayId,
  emptyCart,
  removeUser,
} = cartSlice.actions;

export default cartSlice.reducer;
