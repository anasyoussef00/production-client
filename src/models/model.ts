import type { IModel } from './types';

export default abstract class Model<T> implements IModel {
  abstract getById<T>(id: number): Promise<T | undefined>;
}
