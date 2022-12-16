import axios from "axios";

export const shippoTracking = async (carrier, trackingNum) => {
  const response = await axios.get(
    `/shippo?carrier=${carrier}&trackingNum=${trackingNum}`
  );
  return response.data.chapter;
};
