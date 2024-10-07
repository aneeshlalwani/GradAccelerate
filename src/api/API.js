import axios from "axios";

const SHEET_API = "";

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