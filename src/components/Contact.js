import React from "react";
import { TextInput, Textarea, Button, Group, Box, Grid } from "@mantine/core";
import { useForm } from "@mantine/form";

function Contact() {
  const form = useForm({
    initialValues: {
      message: "",
      email: "",
      termsOfService: false,
    },

    validate: {
      name: (value) =>
        value.length < 3 ? "You must enter a valid name" : null,
      message: (value) =>
        value.length < 5 ? "Message must be at least 5 characters long" : null,
      email: (value) =>
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value
        )
          ? null
          : "Invalid email",
    },
  });

  return (
    <Grid justify="center">
      <Grid.Col span={10}>
        <Box mx="auto">
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <Textarea
              required
              autosize
              minRows={1}
              maxRows={1}
              label="Name"
              placeholder="Please enter your name here..."
              {...form.getInputProps("name")}
            />
          </form>
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <Textarea
              required
              autosize
              minRows={10}
              label="Message"
              placeholder="Enter your message here..."
              {...form.getInputProps("message")}
            />
          </form>
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <TextInput
              required
              label="Email"
              placeholder="your@email.com"
              {...form.getInputProps("email")}
            />
            <Group position="" mt="md">
              <Button type="submit">Submit</Button>
            </Group>
          </form>
        </Box>
      </Grid.Col>
    </Grid>
  );

  // return (
  //   <div>
  //     <h1>Contact</h1>
  //     <form>
  //       <label>Name:</label>
  //       <input type="text" name="name" />
  //       <label>Email:</label>
  //       <input type="text" name="email" />
  //       <label>Message:</label>
  //       <textarea name="message" />
  //       <input type="submit" value="Submit" />
  //     </form>
  //   </div>
  // );
}

export default Contact;
