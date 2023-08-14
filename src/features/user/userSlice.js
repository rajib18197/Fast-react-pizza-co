// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { getAddress } from "../../services/apiGeocoding";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeocoding";

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const fetchAddress = createAsyncThunk(
  "user/fetchAddress",
  async function () {
    // 1) We get the user's geolocation position
    const positionObj = await getPosition();
    console.log(positionObj);

    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    //  2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong

    console.log(position);
    const addressObj = await getAddress(position);
    console.log(addressObj);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    // 3) Then we return an object with the data that we are interested in.
    //     Payload of the FULFILLED state
    return { position, address };
  }
);

const initialState = {
  username: "",
  status: "idle",
  position: {},
  address: "",
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUsername(state, action) {
      console.log(action);
      state.username = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAddress.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        console.log("ssss");
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = "idle";
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        console.log("s");
        state.status = "error";
        state.error =
          "There was an error fetching your position. please provide your address here...";
      });
  },
});

export const { updateUsername } = userSlice.actions;

export default userSlice.reducer;

export const getUser = (state) => state.user;
