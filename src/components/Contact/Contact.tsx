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
        className=" text-3xl flex justify-center md:text-5xl font-bold pt-5 pb-10 bg-clip-text
         gradient-text text-transparent my-4"
      >
        Contact Us
      </h3>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-4 py-8 max-w-[650px] mx-auto"
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
