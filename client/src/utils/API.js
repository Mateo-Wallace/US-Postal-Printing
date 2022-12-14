require('dotenv').config();

// might need to adjust in order to work.
// havent been able to test in browser
export const shippoTracking = (carrier, trackingNum) => {
  return fetch(`https://api.goshippo.com/tracks/${carrier}/${trackingNum}/`, {
    method: "GET",
    headers: {
      Authorization: process.env.SHIPPO_AUTH,
    },
  });
};