import { Stack } from "@mui/material";

export default function Page() {
  return (
    <Stack spacing={2} alignContent="center">
      <Stack spacing={1} direction="row" justifyContent="center">
        <h1>MAIN PAGE</h1>
      </Stack>
      <Stack spacing={1} direction="row" justifyContent="center">
        <p>
          Get started by editing <code>src/app/page.tsx</code>
        </p>
      </Stack>
    </Stack>
  );
}
