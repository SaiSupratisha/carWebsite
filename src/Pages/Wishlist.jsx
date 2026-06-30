import { useContext } from "react";

import { WishlistContext } from "../Context/WishlistContext";

function Wishlist() {

    const { wishlist, dispatch } =
        useContext(WishlistContext);

    return (

        <div
            style={{
                padding: "40px",
            }}
>

            <h1>My Wishlist</h1>

            {wishlist.length === 0 ? (

                <h2>No Cars Added</h2>

            ) : (

                wishlist.map((car) => (

                    <div
                        key={car.id}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "20px",
                            margin: "20px 0",
                            border: "1px solid #ddd",
                        }}
>

                        <div>

                            <h3>

                                {car.make} {car.model}

                            </h3>

                            <p>

                                ₹ {car.price?.toLocaleString()}

                            </p>

                        </div>

                        <button
                            onClick={() =>
                                dispatch({
                                    type: "REMOVE",
                                    payload: car.id,
                                })
                            }
>
                            Remove
</button>

                    </div>

                ))

            )}

            {wishlist.length > 0 && (

                <button
                    onClick={() =>
                        dispatch({
                            type: "CLEAR",
                        })
                    }
>
                    Clear Wishlist
</button>

            )}

        </div>

    );

}

export default Wishlist;
