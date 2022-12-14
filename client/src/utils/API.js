require('dotenv').config();

export const shippoTracking = (carrier, trackingNum) => {
  return fetch(`https://api.goshippo.com/tracks/${carrier}/${trackingNum}/`, {
    method: "GET",
    headers: {
      Authorization: process.env.SHIPPO_AUTH,
    },
  });
};