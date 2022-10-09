import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
  modalName: true,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isModalOpen = true;
      state.modalName = action.payload;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.modalName = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
