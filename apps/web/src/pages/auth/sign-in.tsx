"use client"

import { useForm } from "@tanstack/react-form"
import { toast } from "sonner"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import { signInSchema } from "@workspace/ui/validators/auth"
import { Link } from "react-router-dom"

export default function SignIn() {
  const form = useForm({
    defaultValues: {
      email: "",
    },
    validators: {
      onSubmit: signInSchema,
    },
    onSubmit: async ({ value }) => {},
  })

  return (
    <div className="flex h-dvh w-full items-center justify-center">
      <Card className="w-full sm:max-w-md">
        <CardHeader className="gap-4 text-center">
          <CardTitle>Sign In</CardTitle>
          <CardDescription>
            Enter your credentials to access your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            id="bug-report-form"
            onSubmit={(e) => {
              e.preventDefault()
              form.handleSubmit()
            }}
          >
            <FieldGroup>
              <form.Field
                name="email"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        placeholder="john@example.com"
                        autoComplete="off"
                        type="email"
                        className="py-5"
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  )
                }}
              />
            </FieldGroup>
            <Button
              type="submit"
              form="bug-report-form"
              className="mt-6 w-full py-5"
            >
              Submit
            </Button>
          </form>
          <CardDescription className="mt-5 text-center">
            Don't have an account?{" "}
            <Link to="/sign-up" className="text-primary underline">
              Sign Up
            </Link>
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  )
}
