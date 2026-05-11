import toast from "react-hot-toast";

export const notifySuccess = (message) => {
    toast.success(message, {
        duration: 3000,
        style: {
            background: "#0f172a",
            color: "#facc15",
            border: "1px solid #facc15"
        }
    });
};

export const notifyError = (message) => {
    toast.error(message, {
        duration: 3000,
        style: {
            background: "#1f1f1f",
            color: "#ef4444"
        }
    });
};