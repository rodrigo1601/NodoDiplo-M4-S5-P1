import Swal from "sweetalert2";
import { notifySuccess, notifyError } from "../utils/toast";
import { useItem } from "./useItem";

export const useCrudItem = () => {

    const { createItem,updateItem, deleteItem } = useItem();

    const handleCreate = async (data) => {
        
        const ok = await createItem(data);

        if (ok) {
            notifySuccess(`${data.name} creado`);
            return true;
        } else {
            notifyError(`Error al crear ${data.name}`);
            return false;
        }
    }


    const handleUpdate = async (id, data) => {
        const result = await Swal.fire({
            title: `¿Actualizar a ${data.name}?`,
            text: "Se actualizará la información del personaje",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#2563eb",
            cancelButtonColor: "#6b7280",
            confirmButtonText: "Actualizar"
        });

        if (!result.isConfirmed) return false;

        const ok = await updateItem(id, data);

        if (ok) {
            notifySuccess(`${data.name} actualizado`);
            return true;
        } else {
            notifyError(`Error al actualizar ${data.name}`);
            return false;
        }
    }

    const handleDelete = async (item) => {

        const result = await Swal.fire({
            title: `¿Eliminar a ${item.name}?`,
            text: "No se puede deshacer",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#dc2626",
            cancelButtonColor: "#6b7280",
            confirmButtonText: "Eliminar"
        });

        if (!result.isConfirmed) return false;

        const ok = await deleteItem(item.id);

        if (ok) {
            notifySuccess(`${item.name} eliminado`);
            return true;
        } else {
            notifyError(`Error al eliminar ${item.name}`);
            return false;
        }
    };

    return { handleCreate,handleUpdate, handleDelete };
};