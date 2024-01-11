import { axiosInstance } from ".";

export const RegisterStudent = async (payload) => {
    try {
        const response = await axiosInstance.post("/api/student/register", payload)
        return response.data;
    } catch (err) {
        return err.message;
    }
}

export const userLogin = async (payload) => {
    try {
        const response = await axiosInstance.post("/api/student/login", payload);
        return response.data;
    } catch (err) {
        return err;
    }
}

export const GetStudent = async () => {
    try {
        const response = await axiosInstance.get("/api/student/get-student", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        return response.data;
    } catch (err) {
        return err;
    }
}
