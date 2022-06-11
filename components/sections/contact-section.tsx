import { useSendEmail } from "@/hooks";
import { IContact } from "@/interfaces";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Container } from "../container/container";
import { FormCard } from "../form-card/form-card";
import { Section } from "../section/section";

export const ContactSection = () => {
  const styles = {
    form: "flex flex-col h-auto gap-4",
    error: "bg-red-200 transition-long",
    nonError: "bg-gray-200 transition-long",
    field:
      "w-full px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 border-2 border-gray-300 outline-none  focus:border-primary focus:ring-primary focus:bg-gray-100",
  };

  const [hideSuccessMessage, setHideSuccessMessage] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IContact>();

  const { isLoading, isSuccess, message, error, sendEmail } =
    useSendEmail<IContact>();

  const formHasErrors = Object.keys(errors).length > 0;

  const onSubmitHandler = (data: IContact) => {
    sendEmail(data);
  };

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        setHideSuccessMessage(true);
        reset();
      }, 3000);
    } else setHideSuccessMessage(false);
  }, [isSuccess, reset]);

  console.log("Errors: ", errors);
  console.log("IsSuccess: ", isSuccess);
  return (
    <Section id="contact" className="flex-1 relative md:mt-[15vh]">
      <Container>
        <FormCard
          title={
            <h1>
              Let&apos;s talk!{" "}
              <span className="text-secondary-light group-hover:text-primary transition-long">
                Tell us how
              </span>{" "}
              we can help.
            </h1>
          }
          helperText="If you have a question or would like to work with our
          company please feel free to contact us!"
        >
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className={styles.form}
          >
            <input
              {...register("name", { required: true })}
              type="input"
              placeholder="Enter your Name / Company *"
              id="name"
              className={`${styles.field} ${
                errors.name ? styles.error : styles.nonError
              }`}
            />
            <input
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                  message: "Email is not valid.",
                },
              })}
              type="email"
              placeholder="Enter your email *"
              id="email"
              className={`${styles.field} ${
                errors.email ? styles.error : styles.nonError
              }`}
            />
            <input
              {...register("phone")}
              type="input"
              placeholder="Enter your phone"
              id="phone"
              className={`${styles.field} ${styles.nonError}`}
            />
            <input
              {...register("subject")}
              type="input"
              placeholder="Enter the subject"
              id="subject"
              className={`${styles.field} ${styles.nonError}`}
            />
            <textarea
              {...register("message", { required: true })}
              placeholder="Enter your message *"
              id="message"
              rows={5}
              className={`${styles.field} ${
                errors.message ? styles.error : styles.nonError
              }`}
            />

            <button
              type="submit"
              className="flex items-center justify-center btn btn-secondary"
            >
              {isLoading ? "Sending..." : "Send"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-6 h-6 mt-1 ml-2 ${
                  isLoading ? "animate-bounce" : ""
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
          <div className="mt-4 text-center">
            {formHasErrors && (
              <p className="text-red-500">Please fill required fields.</p>
            )}
            {errors?.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
            {isSuccess && (
              <p
                className={`${
                  hideSuccessMessage ? "text-transparent" : "text-green-500"
                } transition-long`}
              >
                {message}
              </p>
            )}
            {error && <p className="text-red-500">{message}</p>}
            &nbsp;
          </div>
        </FormCard>
      </Container>
    </Section>
  );
};
