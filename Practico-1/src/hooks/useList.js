import { useState } from "react";

export const useList = (initialItems = []) => {

    const [items, setItems] = useState(initialItems);

    const add = (item) => {
        setItems(prev => [...prev, item]);
    };

    const remove = (index) => {
        setItems(prev => prev.filter((_, i) => i !== index));
    };

    const init = (newItems = []) => {
        setItems(newItems);
    };

    return {
        items,
        add,
        remove,
        init
    };
};