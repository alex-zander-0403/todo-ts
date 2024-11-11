// import type { AxiosInstance, AxiosResponse } from 'axios';
// import type { PostTypeDb, PostTypeForm } from '../types/postTypes';
// import PostSchema from '../utils/validators';
// import axiosInstance from './axiosInstance';

import { AxiosInstance } from 'axios';
import axiosInstance from './axiosInstance';
import { TaskTypeDb } from '../types/TaskTypes';
import TaskSchema from '../utils/validators';

class TaskService {
  constructor(private readonly client: AxiosInstance) {}

  async getPosts(): Promise<TaskTypeDb[]> {
    const { data } = await this.client<TaskTypeDb[]>('/tasks');
    return TaskSchema.array().parse(data);
  }

//   async addPost(myFormData: PostTypeForm): Promise<PostTypeDb> {
//     const { data } = await this.client.post<PostTypeDb>('/posts', myFormData);
//     return PostSchema.parse(data);
//   }

//   async deletePost(id: PostTypeDb['id']): Promise<AxiosResponse> {
//     return this.client.delete<AxiosResponse>(`/posts/${id}`);
//   }
}

export default new TaskService(axiosInstance);
