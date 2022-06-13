export interface ISendEmailReturn<T> {
  message: string | null;
  isLoading: boolean;
  isSuccess: boolean;
  error: boolean;
  sendEmail: (data: T) => Promise<void>;
}
