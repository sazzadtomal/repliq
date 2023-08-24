import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from "@/components/Navbar/NavbarSlice";
import { productsApi } from "@/app/products/productsSlice";
import cartSlice from "@/app/cart/cartSlice";
import orderSlice from "@/app/orders/orderSlice";

  const Store=configureStore({
    reducer:{

        [productsApi.reducerPath]:productsApi.reducer,
         navbar:navbarSlice,
         cart:cartSlice,
         order:orderSlice
      },

      middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productsApi.middleware),
  
  })


  export default Store