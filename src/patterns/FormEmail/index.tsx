import React from "react";
import { useRouter } from "next/router";
import { Button } from "@ninjas/components/commons/Button";
import TextField from "@ninjas/components/forms/TextField";
import { useForm } from "@ninjas/infra/hooks/forms/useForm";
import { loginService } from "../../services/login/loginService";

function FormEmail() {
  const router = useRouter();
  const initialValues = {
    username: "",
    password: "",
    email: "",
  };

  const form = useForm({
    initialValues,
    onSubmit: async (values) => {
      try {
        await loginService.login({
          username: values.username,
          password: values.password,
        });

        router.push("/app/profile");
      } catch (error) {
        // Handle the error appropriately
        alert("Login failed. Please check your credentials.");
      }
    },
  });

  return (
    <form id="formEmail" onSubmit={form.handleSubmit}>
      <TextField
        tag="input"
        placeholder="Name"
        name="username"
        value={form.values.username}
        onChange={form.handleChange}
      />
      <TextField
        tag="input"
        placeholder="Email"
        name="email"
        type="email"
        value={form.values.password}
        onChange={form.handleChange}
      />

      <TextField
        tag="textarea"
        placeholder="Enter your message here...."
        name="content"
        value={form.values.password}
        onChange={form.handleChange}
      />

      <Button
        tag="button"
        type="button"
        variant="primary.main"
        margin={{
          xs: "0 auto",
          md: "initial",
        }}
        // fullWidth
      >
        Submit
      </Button>
    </form>
  );
}

export default FormEmail;
