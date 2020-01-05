import React from "react";
import BeerContext from "./context";

export function useBeers() {
    const { state: { beers } } = React.useContext(BeerContext)

    return beers
}