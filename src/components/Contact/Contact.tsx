import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import "./Contact.module.scss";
import axios from "axios";
import ReCAPTCHA from 'react-google-recaptcha';

type FormState = {
  email: string;
  name: string;
  message: string;
};

type ServiceMessage = {
  class: string;
  text: string;
};


function Contact() {
  const formId = "R43pl5tW";
  const formSparkUrl = `https://submit-form.com/${formId}`;
  const recaptchaKey = '6Lc0oX0cAAAAACovCKeJRROkWoYHeoeyGG-InfsR';
  const recaptchaRef = useRef<any>();

  const initialFormState = {
    email: "",
    name: "",
    message: "",
  };

  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<ServiceMessage>();
  const [recaptchaToken, setReCaptchaToken] = useState<string>();

  const submitForm = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    await postSubmission();
    setSubmitting(false);
  };

  const postSubmission = async () => {
    const payload = {
      ...formState,
      "g-recaptcha-response": recaptchaToken,
    };

    try {
      const result = await axios.post(formSparkUrl, payload);
      console.log(result);
      setMessage({
        class: "bg-green-500",
        text: "Thanks, someone will be in touch shortly.",
      });
      setFormState(initialFormState);
      recaptchaRef.current.reset();
    } catch (error) {
      console.log(error);
      setMessage({
        class: "bg-red-500",
        text: "Sorry, there was a problem. Please try again or contact support.",
      });
    }
  };

  const updateFormControl = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;
    const key = id as keyof FormState;
    const updatedFormState = { ...formState };
    updatedFormState[key] = value;
    setFormState(updatedFormState);
  };

  const updateRecaptchaToken = (token: string | null) => {
    setReCaptchaToken(token as string);
  };

  return (
    <div className="w-100 h-100">
      <div className="pt-5">
        <h1 className="text-dark">
          GET IN TOUCH
        </h1>
        {message && (
          <div className={`my-4 text-dark w-full p-4 ${message.class}`}>
            {message.text}
          </div>
        )}
        <form onSubmit={submitForm}>
          <div className="my-2 d-flex justify-content-center align-items-center mt-4">
            <label htmlFor="name">Name</label>
            <input
              onChange={updateFormControl}
              className="rounded pl-2 ml-3"
              type="text"
              id="name"
              value={formState?.name}
            />
          </div>
          <div className="my-2 d-flex justify-content-center align-items-center mt-4">
            <label htmlFor="email">Email</label>
            <input
              onChange={updateFormControl}
              className="rounded pl-2 ml-3"
              type="email"
              id="email"
              value={formState?.email}
            />
          </div>
          <div className="my-2 d-flex justify-content-center align-items-center mt-4">
            <label htmlFor="message">Message</label>
            <textarea
              onChange={updateFormControl}
              className="rounded pl-2 ml-3"
              id="message"
              value={formState?.message}
            ></textarea>
          </div>

          <div className="d-flex justify-content-center mt-4">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={recaptchaKey}
            onChange={updateRecaptchaToken}
          />
            </div>

          <button
            disabled={submitting}
            className="btn btn-primary mr-2 mt-5"
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}



export default Contact;










// css
// @tailwind base;
// @tailwind components;
// @tailwind utilities;







