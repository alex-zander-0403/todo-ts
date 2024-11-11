import type { z } from 'zod';
import type TaskSchema from '../utils/validators';

// тип данных из бд
export type TaskTypeDb = z.infer<typeof TaskSchema>;

// тип данных из формы (фронт)
export type TaskTypeForm = Omit<TaskTypeDb, 'id'>;
