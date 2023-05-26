export interface IModel {
  getById<T>(id: number): Promise<T | undefined>;
}
