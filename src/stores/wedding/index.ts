import { create } from "zustand";
import { PersonSlice, createPersonSlice } from "./person.slice";
import { devtools } from "zustand/middleware";
import { GuestSlice, createGuestSlice } from "./guest.slice";
import { createDateSlice, DateSlice } from "./date.slice";
import {
  ConfirmationSlice,
  createConfirmationSlice,
} from "./confirmation.slice";

type ShareState = PersonSlice & GuestSlice & DateSlice & ConfirmationSlice;

export const useWeddingBoundStore = create<ShareState>()(
  devtools((...a) => ({
    ...createPersonSlice(...a),
    ...createGuestSlice(...a),
    ...createDateSlice(...a),
    ...createConfirmationSlice(...a),
  }))
);
