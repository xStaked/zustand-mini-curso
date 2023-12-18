import { type StateCreator, create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { useWeddingBoundStore } from "../wedding";
// import { firebaseStorage } from "../storages/firebase.storage";
// import { logger } from "../middlewares/logger.middleware";

interface PersonState {
  firstName: string;
  lastName: string;
}

interface Actions {
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
}

const storeAPI: StateCreator<
  PersonState & Actions,
  [["zustand/devtools", never]]
> = (set) => ({
  firstName: "Sergio",
  lastName: "Romero",
  setFirstName: (firstName: string) =>
    set(() => ({ firstName: firstName }), false, "setFirstName"),
  setLastName: (lastName: string) =>
    set(() => ({ lastName: lastName }), false, "setLastName"),
});

export const usePersonStore = create<PersonState & Actions>()(
  // logger(
  devtools(
    persist(storeAPI, {
      name: "person-storage",
      // storage: customSessionStorage,
      // storage: firebaseStorage,
    })
  )
  // )
);

usePersonStore.subscribe((nextState /*prevState*/) => {
  const { firstName, lastName } = nextState;

  useWeddingBoundStore.getState().setFirstName(firstName);
  useWeddingBoundStore.getState().setLastName(lastName);
});
