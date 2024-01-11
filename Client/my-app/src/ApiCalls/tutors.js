import { axiosInstance } from ".";

export const RegisterTutor = async (payload) => {
    try {
        const response = await axiosInstance.post("/api/tutor/register", payload);
        return response.data;
    } catch (err) {
        return err;
    }
}