import axios from "axios";
import { useState } from "react";
import { ISendEmailResponse, ISendEmailReturn } from "@/interfaces";

export function useSendEmail<T>(): ISendEmailReturn<T> {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);

  const sendEmail = async (requestData: T) => {
    setLoading(true);
    setMessage(null);
    setError(false);

    try {
      const response = await axios.post("/api/send-email", { ...requestData });
      const data: ISendEmailResponse = response.data;

      if (response.status === 200) {
        setError(false);
        setMessage(data.message);
      } else {
        setError(true);
        setMessage(data.message);
      }
    } catch (err: any) {
      setMessage(err.message);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { loading, message, error, sendEmail } as const;
}
