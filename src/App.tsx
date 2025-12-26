import { Toaster } from "sonner";
import { RoutesLayout } from "./RoutesLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <RoutesLayout />
      </QueryClientProvider>
    </>
  );
}
