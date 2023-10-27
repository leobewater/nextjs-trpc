import { type AppRouter } from "@/server";
import { createTRPCReact } from "@trpc/react-query";

// This defines a tRPC instance that is usable inside all your Next.js 13 client-components.
export const trpc = createTRPCReact<AppRouter>({});
