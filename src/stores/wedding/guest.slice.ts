import { StateCreator } from "zustand";

export interface GuestSlice {
  guestCount: number;

  setGuestCount(guestCount: number): void;
}

export const createGuestSlice: StateCreator<GuestSlice> = (set) => ({
  guestCount: 0,

  //   setGuestCount: (guestCount) => {
  //     if (guestCount <= 0) {
  //       guestCount = 1;
  //     }
  //     set({ guestCount });
  //   },
  setGuestCount: (guestCount) =>
    set({ guestCount: guestCount <= 0 ? 1 : guestCount }),
});
