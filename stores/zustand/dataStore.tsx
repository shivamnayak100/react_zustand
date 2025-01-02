import { create } from 'zustand';
import { fetchData } from '../../services/apiServices';
import {Post} from '../../types/posts'

interface DataStore {
  data: Post[];
  isLoading: boolean;
  isError: boolean;
  fetchData: () => Promise<void>;
}

const useDataStore = create<DataStore>((set) => ({
  data: [],
  isLoading: false,
  isError: false,
  fetchData: async () => {
    set({ isLoading: true, isError: false });
    try {
      const data = await fetchData();
      set({ data, isLoading: false });
    } catch (error) {
      set({ isError: true, isLoading: false });
    }
  },
}));

export default useDataStore;
