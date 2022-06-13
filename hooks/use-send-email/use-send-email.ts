import axios from "axios";
import { useState } from "react";
import { ISendEmailResponse, ISendEmailReturn } from "@/interfaces";

export function useSendEmail<T>(): ISendEmailReturn<T> {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const sendEmail = async (requestData: T) => {
    setIsLoading(true);
    setMessage(null);
    setError(false);

    try {
      const response = await axios.post("/api/send-email", { ...requestData });
      const data: ISendEmailResponse = response.data;

      if (response.status === 200) {
        setError(false);
        setMessage(data.message);
        setIsSuccess(true);
      } else {
        setError(true);
        setMessage(data.message);
        setIsSuccess(false);
      }
    } catch (err: any) {
      setMessage(err.message);
      setError(true);
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, message, error, isSuccess, sendEmail } as const;
}
