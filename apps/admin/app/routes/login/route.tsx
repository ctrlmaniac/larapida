import { FormControl, FormLabel, Input, Sheet, Stack } from "@mui/joy";
import { Splash } from "../../ui/components";
import { ClientActionFunctionArgs, Form } from "react-router";

export async function clientAction({ request }: ClientActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  // Perform login logic here
  console.log(email, password);
}

export default function LoginComponent() {
  return (
    <Splash>
      <Sheet variant="solid" sx={{ p: 2, backgroundColor: 'background.body' }} >
        <Form method="post">
          <Stack direction='column' spacing={2}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input required name="email" variant="outlined" size="md" placeholder="La tua email" />
            </FormControl>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input required name="password" type="password" variant="outlined" size="md" placeholder="La tua password" />
            </FormControl>
          </Stack>
        </Form>
      </Sheet>
    </Splash>
  );
}
