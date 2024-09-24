"use client";

import { useToast } from "@/hooks/use-toast";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { Overpass_Mono } from "next/font/google";

const overpassMono = Overpass_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

interface Values {
  name: string;
  email: string;
  message: string;
  honeypot1: string;
  honeypot2: string;
}

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  name: Yup.string().required("Name is required"),
  message: Yup.string().required("Message is required"),
});

const ContactForm = () => {
  const { toast } = useToast(); // Hook for managing toast notifications
  const [buttonText, setButtonText] = useState("Submit");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const corsProxy: string = "https://cors-anywhere.herokuapp.com/";

  return (
    <div className="w-full flex flex-col justify-center items-center mt-10">
      <div className="w-4/5 mb-10">
        <div className="w-1/2">
          <h2
            className={`${overpassMono.className} text-4xl text-indigo-950 mb-5`}
          >
            Contact
          </h2>
          <div className="relative">
            <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black"></div>
            <div className="relative border-2 border-black overflow-hidden">
              <div className="flex flex-col gap-4 justify-center items-center p-5 bg-indigo-600 text-gray-50">
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    message: "",
                    honeypot1: "",
                    honeypot2: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(
                    values: Values,
                    { setSubmitting, resetForm }: FormikHelpers<Values>
                  ) => {
                    if (values.honeypot1 || values.honeypot2) {
                      toast({
                        title: "Error",
                        description: "Service denied",
                        variant: "destructive",
                      });
                      setSubmitting(false);
                      setButtonText("Submit");
                      setButtonDisabled(false);
                      return;
                    }

                    setButtonText("Sending");
                    setButtonDisabled(true);

                    const formData = new FormData();
                    formData.append("entry.809168373", values.name);
                    formData.append("entry.743332734", values.email);
                    formData.append("entry.27837444", values.message);

                    fetch(
                      `${corsProxy + process.env.NEXT_PUBLIC_CONTACT_FORM_URL}`,
                      {
                        method: "POST",
                        body: formData,
                      }
                    )
                      .then((response) => {
                        if (response.ok) {
                          toast({
                            title: "Success",
                            description:
                              "Your report has been submitted successfully.",
                          });
                          resetForm();
                        } else {
                          toast({
                            title: "Error",
                            description:
                              "There was a problem submitting your report.",
                            variant: "destructive",
                          });
                        }
                      })
                      .catch((error) => {
                        toast({
                          title: "Error",
                          description:
                            "An error occurred. Please try again later.",
                          variant: "destructive",
                        });
                      })
                      .finally(() => {
                        setSubmitting(false);
                        setButtonText("Submit");
                        setButtonDisabled(false);
                      });
                  }}
                >
                  {({ values, handleChange, handleBlur, touched, errors }) => (
                    <Form className="w-4/5">
                      {/* Honeypot Fields */}
                      <div style={{ display: "none" }}>
                        <Input
                          id="honeypot1"
                          name="honeypot1"
                          value={values.honeypot1}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <Input
                          id="honeypot2"
                          name="honeypot2"
                          value={values.honeypot2}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium"
                        >
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="w-full mt-2 p-2 rounded border border-gray-300"
                        />
                        {touched.name && errors.name && (
                          <div className="text-red-600 text-sm">
                            {errors.name}
                          </div>
                        )}
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="w-full mt-2 p-2 rounded border border-gray-300"
                        />
                        {touched.email && errors.email && (
                          <div className="text-red-600 text-sm">
                            {errors.email}
                          </div>
                        )}
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium"
                        >
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={values.message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="w-full mt-2 p-2 rounded border border-gray-300"
                          rows={4}
                        />
                        {touched.message && errors.message && (
                          <div className="text-red-600 text-sm">
                            {errors.message}
                          </div>
                        )}
                      </div>

                      {/* Updated Submit Button */}
                      <div className="relative mb-4">
                        <div className="absolute inset-0 translate-x-1 translate-y-1 bg-black rounded-md"></div>
                        <div className="relative border-2 border-gray-50 rounded-md">
                          <button
                            type="submit"
                            className="flex justify-center items-center w-full p-2 bg-blue-300 hover:bg-indigo-100 rounded-sm text-lg font-light text-black"
                            disabled={buttonDisabled}
                          >
                            {buttonText}
                          </button>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
