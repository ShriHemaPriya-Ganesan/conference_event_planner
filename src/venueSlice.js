// Importing createSlice from Redux Toolkit to create a slice of the store
import { createSlice } from "@reduxjs/toolkit";

// venueSlice is a Redux slice that manages the state for venue items
export const venueSlice = createSlice({
  name: "venue",
  initialState: [
    {
      img: "https://pixabay.com/images/download/chairs-2181916_640.jpg",
      name: "Conference Room (Capacity:15)",
      cost: 3500,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/images/download/event-venue-1597531_640.jpg",
      name: "Auditorium Hall (Capacity:200)",
      cost: 5500,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/images/download/convention-center-3908238_640.jpg",
      name: "Presentation Room (Capacity:50)",
      cost: 700,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/images/download/chairs-2181916_640.jpg",
      name: "Large Meeting Room (Capacity:10)",
      cost: 900,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/images/download/laptops-593296_640.jpg",
      name: "Small Meeting Room (Capacity:5)",
      cost: 1100,
      quantity: 0,
    },
  ],

  // Reducers to modify the state
  reducers: {

    incrementQuantity: (state, action) => {
      const { payload: index } = action;

      // If the venue item exists, check if it's the Auditorium Hall and its quantity is less than 3
      if (state[index]) {
        if (state[index].name === "Auditorium Hall (Capacity:200)" && state[index].quantity >= 3) {
          return;  // If quantity is 3 or more, prevent further increment
        }
        state[index].quantity++;  // Increase the quantity of the venue item
      }
    },

    // Decrement quantity for a specific venue item by index
    decrementQuantity: (state, action) => {
      const { payload: index } = action;

      // If the venue item exists and the quantity is greater than 0, decrement the quantity
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--;
      }
    },
  },
});

// Exporting the action creators for incrementing and decrementing quantity
export const { incrementQuantity, decrementQuantity } = venueSlice.actions;

export default venueSlice.reducer;
