import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com'; 

export interface Post {
  id: number;
  title: string;
  body: string;
}

export const fetchData = async (): Promise<Post[]> => {
  try {
    const response = await axios.get<Post[]>(`${BASE_URL}/posts`); 
    return response.data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
