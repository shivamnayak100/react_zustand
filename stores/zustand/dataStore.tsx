import { create } from 'zustand';
import { createData, fetchData } from '../../services/apiServices';
import {Post} from '../../types/posts'
import { devtools, persist, } from "zustand/middleware";

interface DataStore {
  data: Post[];
  isLoading: boolean;
  isError: boolean;
  fetchData: () => Promise<void>;
  postData: (payload: object) => Promise<void>; 
}

const useDataStore = create<DataStore>()(devtools(persist((set) => ({
  data: [],
  isLoading: false,
  isError: false,

  // Get data
  fetchData: async () => {
    set({ isLoading: true, isError: false });
    try {
      const data = await fetchData();
      set({ data, isLoading: false });
    } catch (error) {
      set({ isError: true, isLoading: false });
    }
  },

  // Create data
  postData: async (payload) => {
    set({ isLoading: true, isError: false });
    try {
      await createData(payload);
      await fetchData();
      set((state) => ({
        isLoading: false,
      }));
    } catch (error) {
      set({ isError: true, isLoading: false });
      console.error('Post API Error:', error);
    }
  },
}),
{
  name: "data-storage",
}
)));

export default useDataStore;
