// might need to adjust in order to work.
// havent been able to test in browser
export const shippoTracking = (carrier, trackingNum) => {
  return fetch(`https://api.goshippo.com/tracks/${carrier}/${trackingNum}/`, {
    method: "GET",
    headers: {
      Authorization: process.env.REACT_APP_SHIPPO_AUTH,
    },
  });
};

// EXAMPLE FETCH
// fetch(`https://api.goshippo.com/tracks/usps/9405511206207509897316/`, {
//   method: "GET",
//   headers: {
//     Authorization:
//       "ShippoToken shippo_live_05057e4ee71b6ff6a2886ee10d716d27c7bced13",
//   },
// });