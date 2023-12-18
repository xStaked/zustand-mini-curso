import { type StateStorage, createJSONStorage } from "zustand/middleware";

const fireBaseUrl =

const storageAPI: StateStorage = {
  getItem: async function (name: string): Promise<string | null> {
    try {
      const data = await fetch(`${fireBaseUrl}/${name}.json`).then((res) =>
        res.json()
      );
      console.log(data);
      return JSON.stringify(data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  setItem: async function (name: string, value: string): Promise<void> {
    const data = await fetch(`${fireBaseUrl}/${name}.json`, {
      method: "PUT",
      body: value,
    }).then((res) => res.json());
    return data;
  },
  removeItem: function (name: string): void | Promise<void> {
    sessionStorage.removeItem(name);
  },
};

export const firebaseStorage = createJSONStorage(() => storageAPI);
