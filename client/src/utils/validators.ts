import { z } from 'zod';

// с помощью zod описываем схему по которой будет валидироваться пришедшие данные (task) с бд
const TaskSchema = z.object({
  id: z.number(),
  title: z.string(),
  userId: z.number().nullable(), // Теперь userId может быть либо числом, либо null
});

export default TaskSchema;
