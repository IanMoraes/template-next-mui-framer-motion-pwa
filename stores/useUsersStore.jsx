import { create } from "zustand";
const useUsersStore = create((set) => ({
    pokes: [],
    setPokes: (data) => set(data),
}));
export default useUsersStore;
