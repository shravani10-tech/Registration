import { TextInput, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';

function OTP() {
  const form = useForm({
    initialValues: {
      otp: '',
      
    },

   
  });

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          required
          label="Enter your OTP"
          placeholder=""
          {...form.getInputProps('otp')}
        />

        
        <Group position="center" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}

export default OTP