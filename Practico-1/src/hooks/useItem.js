import { useContext } from "react";
import { ItemContext } from "../context/ItemContext";

export function useItem() {
    return useContext(ItemContext);
}