
import { Stack } from "@chakra-ui/react";
import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Stack justifySelf="center" className="relative flex flex-col h-screen">
      <Navbar />
      <main
        className="container mx-auto max-w-7xl px-6 flex-grow overflow-y-scroll"
        style={{ scrollSnapType: "y mandatory" }}
      >
        {children}
      </main>
    </Stack>
  );
}
