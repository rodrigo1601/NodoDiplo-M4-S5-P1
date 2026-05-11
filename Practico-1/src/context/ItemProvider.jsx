import { useState, useEffect } from "react";
import { ItemContext } from "./ItemContext";

import {
    getItemsRequest,
    getItemByIdRequest,
    createItemRequest,
    updateItemRequest,
    deleteItemRequest
} from "../services/itemService";

export const ItemProvider = ({ children }) => {

    const [items, setItems] = useState([]);
    const [itemDetail, setItemDetail] = useState(null);

    const [loading, setLoading] = useState(false);
    const [loadingText, setLoadingText] = useState("");

    const getItems = async () => {
        setLoading(true);
        setLoadingText("Cargando personajes...");
        
        try {
            const res = await getItemsRequest();
            setItems(res.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const getItemById = async (id) => {
        setLoading(true);
        setLoadingText("Cargando personaje...");

        const existing = items.find(i => i.id === id);

        if (existing) {
            setItemDetail(existing);
            setLoading(false);
            setLoadingText("");
            return;
        }

        try {
            const res = await getItemByIdRequest(id);
            setItemDetail(res.data);
        } catch (error) {
            console.error(error);
        }finally {
            setLoading(false);
            setLoadingText("");
        }

    };

    const createItem = async (data) => {
        setLoading(true);
        setLoadingText("Creando personaje...");

        try {
            await createItemRequest(data);
            getItems();
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }finally {
            setLoading(false);
            setLoadingText("");
        }
    };

    const updateItem = async (id, data) => {
        setLoading(true);
        setLoadingText("Actualizando personaje...");
        try {
            await updateItemRequest(id, data);
            getItems();
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }finally {
            setLoading(false);
            setLoadingText("");
        }
    };

    const deleteItem = async (id) => {
        setLoading(true);
        setLoadingText("Eliminando personaje...");
        try {
            await deleteItemRequest(id);
            getItems();
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }finally {
            setLoading(false);
            setLoadingText("");
        }
    };

    useEffect(() => {
        getItems();
    }, []);

    return (
        <ItemContext.Provider value={{
            items,
            itemDetail,
            getItems,
            getItemById,
            createItem,
            updateItem,
            deleteItem,
            loading,
            loadingText
        }}>
            {children}
        </ItemContext.Provider>
    );
};