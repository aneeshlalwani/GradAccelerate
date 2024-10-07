import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const SHEET_API = `${apiUrl}/api/v1/${apiKey}`;

export const sendDataToGoogleSheet = async (data) => {
    try {
      const response = await axios.post(
    SHEET_API,
        data
      );
      console.log("Data sent successfully:", response.data);
    } catch (error) {
        console.error("Error sending data:", error);
        throw error;
    }
}