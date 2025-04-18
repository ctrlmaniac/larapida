import { Button, FormControl, FormLabel, IconButton, Input, Sheet, Stack, Typography } from "@mui/joy";
import { Splash } from "../../ui/components";
import { ClientActionFunctionArgs, data, redirect, useFetcher } from "react-router";
import { api } from "@larapida/client-helpers";
import { useState } from "react";
import Cookies from 'js-cookie';
import { IconEye, IconEyeClosed } from "@tabler/icons-react";

export async function clientAction({ request }: ClientActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  api.v1.post('/auth/login', {
    email: email,
    password: password
  }).then((response) => {
    const { token } = response.data;

    Cookies.set('token', token, {
      domain: 'http://admin.' + process.env.DOMAIN_NAME,
      expires: 1,
    });

    return redirect('/');
  }).catch((error) => {
    const { message } = error.response.data;
    return data({ message });
  });
}

export default function LoginComponent() {
  const fetcher = useFetcher();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Splash>
      <Sheet variant="solid" sx={{ p: 2, backgroundColor: 'background.body' }} >
        <fetcher.Form method="post">
          <Stack direction='column' spacing={2}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input required name="email" variant="outlined" size="md" placeholder="La tua email" />
            </FormControl>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                required
                name="password"
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                size="md"
                placeholder="La tua password"
                endDecorator={
                  <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? <IconEyeClosed /> : <IconEye />}
                  </IconButton>
                }
              />
            </FormControl>

            <Button type='submit' variant="solid" color="primary" size="md">
              Accedi
            </Button>
          </Stack>
        </fetcher.Form>
        {fetcher.data?.message && (
          <Typography
            color="danger"
            sx={{ mt: 2 }}
          >
            {fetcher.data?.message}
          </Typography>
        )}
      </Sheet>
    </Splash>
  );
}
