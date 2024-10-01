"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { contactConfig } from "@/config/site";
import Layout from "@/layouts/Layout";
import { LocateIcon, MailIcon, MapPinIcon, Phone } from "lucide-react";
import { MapPin } from "@phosphor-icons/react";

const formSchema = z.object({
  subject: z.string().min(1, {
    message: "Subject is required",
  }),
  msg: z.string().min(1, {
    message: "Message is required",
  }),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: "",
      msg: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    window.location.href = `mailto:${contactConfig.email}?subject=${values.subject}&body=${values.msg}`;
    form.reset();
  }
  return (
    <Layout>
      <h3
        className=" scroll-mt-20 scroll-smooth text-3xl flex justify-center md:text-5xl font-bold pt-5 pb-10 bg-clip-text
         gradient-text text-transparent my-4"
        id="contact"
      >
        Contact Us
      </h3>
      <div className="flex flex-col gap-6 items-center justify-center px-4 md:px-20">
        <p className="text-center text-sm md:text-base">
          We are always happy to hear from you. Contact us today to discuss your
          requirements and find out how we can help you achieve your business
          goals.
        </p>
        <div className=" flex justify-center items-center gap-6 flex-wrap ">
          <a
            className=" paragraph-text flex items-center gap-2 "
            href="mailto:info@techbazr.com"
          >
            <MailIcon /> info@techbazr.com
          </a>
          <a
            className=" paragraph-text flex items-center gap-2 "
            href="tel:+234 708 603 5929"
          >
            <Phone />
            +234 708 603 5929
          </a>
        </div>
        {/* <div className="flex items-center justify-center">
          <a
            className=" flex items-center gap-2 paragraph-text"
            href="http://31, Adedoyin Road Surulere Lagos, Nigeria."
          >
            <MapPinIcon />
            31, Adedoyin Road Surulere Lagos, Nigeria.
          </a>
        </div> */}
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-4 py-8 max-w-[650px] mt-10 mx-auto"
        >
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="Enter the subject" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="msg"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter your message" {...field} />
                </FormControl>
                <FormDescription>
                  Your message will be sent through email
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div />
          <Button className="w-full" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </Layout>
  );
};

export default Contact;
