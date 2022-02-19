export interface ISendEmailReturn<T> {
  message: string | null;
  loading: boolean;
  error: boolean;
  sendEmail: (data: T) => Promise<void>;
}
