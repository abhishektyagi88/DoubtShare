import { axiosInstance } from ".";

export const AddDoubt = async (payload) => {
    try {
        const response = await axiosInstance.post("/api/doubt/add-doubt", payload)
        return response.data;
    } catch (err) {
        return err.response;
    }
}

export const GetAllDoubts = async () => {
    try {
        const response = await axiosInstance.get("/api/doubt/get-all-doubts");
        return response.data;
    } catch (err) {
        return err.response;
    }
}

export const DeleteDoubt = async (doubtId) => {
    try {
        const response = await axiosInstance.delete(`/api/doubt/delete-doubt?doubtId=${doubtId}`);
        return response.data;
    } catch (err) {
        return err;
    }
}
