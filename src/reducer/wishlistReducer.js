export const initialState = [];
 
export function wishlistReducer(state, action) {
 
    switch (action.type) {
 
        case "ADD":
 
            const exists = state.find(
                (car) => car.id === action.payload.id
            );
 
            if (exists) {
                return state;
            }
 
            return [...state, action.payload];
 
        case "REMOVE":
 
            return state.filter(
                (car) => car.id !== action.payload
            );
 
        case "CLEAR":
 
            return [];
 
        default:
 
            return state;
    }
 
}