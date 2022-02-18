import React from "react";
import {
  Container,
  Footer,
  FormCard,
  IFormCardTitle,
  Layout,
  Section,
} from "@/components";
import type { NextPage } from "next";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { useSendEmail } from "@/hooks";

const styles = {
  form: "flex flex-col h-auto",
  field:
    "flex w-full rounded-lg  mb-4 flex-1 px-4 py-3 text-gray-800 placeholder-gray-500 bg-gray-200 border-2 border-gray-300 outline-none focus:bg-gray-100 focus:border-primary focus:ring-primary",
};

interface IRequestQuote {
  name: string;
  email: string;
  phone: string;
  message: string;
  subject: string;
}

const content: IFormCardTitle = {
  title1: "Let's talk!",
  title2: "Tell us how",
  title3: "we can help.",
  text: "If you have a question or would like to work with our company please feel free to contact us!",
};

const Quote: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRequestQuote>();

  const { loading, message, error, sendEmail } = useSendEmail<IRequestQuote>();
  const errorOrSuccess = error ? "text-red-600" : "text-green-600";

  const onSubmitHandler = (data: IRequestQuote) => {
    sendEmail(data);
  };

  return (
    <Layout>
      <Head>
        <title>FFG - Request a Quote</title>
      </Head>
      <Section className="flex-1">
        <Container className="mt-28">
          <FormCard content={content}>
            <form
              onSubmit={() => handleSubmit(onSubmitHandler)}
              className={styles.form}
            >
              <input
                {...register("name")}
                type="input"
                placeholder="Enter your Name / Company"
                id="name"
                className={styles.field}
              />
              <input
                {...register("email")}
                type="email"
                placeholder="Enter your email"
                id="email"
                className={styles.field}
              />
              <input
                {...register("phone")}
                type="input"
                placeholder="Enter your phone"
                id="phone"
                className={styles.field}
              />
              <input
                {...register("subject")}
                type="input"
                placeholder="Enter the subject"
                id="subject"
                className={styles.field}
              />
              <textarea
                {...register("message")}
                type="textarea"
                placeholder="Enter the quote request"
                id="message"
                rows={5}
                className={styles.field}
              />

              <button
                type="submit"
                className="flex items-center justify-center btn btn-secondary"
              >
                {loading ? "Sending..." : "Send"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-6 h-6 mt-1 ml-2 ${
                    loading ? "animate-bounce" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
            </form>
            {message ? (
              <div className={`${errorOrSuccess} mt-2`}>{message}</div>
            ) : null}
          </FormCard>
        </Container>
      </Section>
      <Footer />
    </Layout>
  );
};

export default Quote;
