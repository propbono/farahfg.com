import React, { useState } from "react";

interface IResponse<T> {
  message: string | null;
  loading: boolean;
  error: boolean;
  sendEmail: (data: T) => Promise<void>;
}

export function useSendEmail<T>(): IResponse<T> {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);

  const sendEmail = async (data: T) => {
    setLoading(true);
    setMessage(null);
    setError(false);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        setMessage(
          "Success! 🎉 We received your request. We will contact you soon."
        );
      } else {
        setError(true);
        setMessage("An error occurred. Please try again later.");
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
