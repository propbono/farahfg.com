import { useSendEmail } from "@/hooks";
import { ICompoundTitle, IContact } from "@/interfaces";
import { useForm } from "react-hook-form";
import { Container } from "../container/container";
import { FormCard } from "../form-card/form-card";
import { Section } from "../section/section";

export const ContactSection = () => {
  const styles = {
    form: "flex flex-col h-auto gap-4",
    error:
      "shadow-red-100 shadow-lg bg-red-100 border-red-500 ring-red-500 focus:ring-red-500 focus:border-red-500 focus:bg-red-100",
    field:
      "w-full px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 bg-gray-200 border-2 border-gray-300 outline-none  focus:border-primary focus:ring-primary focus:bg-gray-100",
  };

  const content: ICompoundTitle = {
    title1: "Let's talk!",
    title2: "Tell us how",
    title3: "we can help.",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContact>();

  const { loading, message, error, sendEmail } = useSendEmail<IContact>();
  const errorOrSuccess = error ? "text-red-500" : "text-green-600";

  const formHasErrors = Object.keys(errors).length > 0;

  const onSubmitHandler = (data: IContact) => {
    sendEmail(data);
  };

  return (
    <Section id="contact" className="flex-1 relative md:mt-[15vh]">
      <Container>
        <FormCard
          title={content}
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
              className={`${styles.field} ${errors.name ? styles.error : ""}`}
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
              className={`${styles.field} ${errors.email ? styles.error : ""}`}
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
              {...register("message", { required: true })}
              placeholder="Enter your message *"
              id="message"
              rows={5}
              className={`${styles.field} ${
                errors.message ? styles.error : ""
              }`}
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
          {formHasErrors ? (
            <div className="mt-2 text-center text-red-500">
              Please fill required fields.{" "}
              {errors?.email ? errors.email.message : ""}
            </div>
          ) : null}
          {message ? (
            <div className={`${errorOrSuccess} mt-2 text-center`}>
              {message}
            </div>
          ) : null}
        </FormCard>
      </Container>
    </Section>
  );
};