import axios from 'axios';
import {Post} from '../types/posts'

const BASE_URL = 'https://jsonplaceholder.typicode.com'; 



export const fetchData = async (): Promise<Post[]> => {
  try {
    const response = await axios.get<Post[]>(`${BASE_URL}/posts`); 
    return response.data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const createData = async (payload): Promise<Post[]> => {
  try {
    const response = await axios.post<Post[]>(`${BASE_URL}/posts`, payload ); 
    return response.data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

