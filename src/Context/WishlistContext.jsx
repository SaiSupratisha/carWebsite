import { createContext, useReducer } from "react";
 
import {
    wishlistReducer,
    initialState,
} from "../reducer/wishlistReducer";
 
export const WishlistContext = createContext();
 
function WishlistProvider({ children }) {
 
    const [wishlist, dispatch] = useReducer(
        wishlistReducer,
        initialState
    );
 
    return (
 
        <WishlistContext.Provider
            value={{ wishlist, dispatch }}
>
            {children}
</WishlistContext.Provider>
 
    );
 
}
 
export default WishlistProvider;