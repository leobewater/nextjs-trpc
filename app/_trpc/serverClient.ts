import { appRouter } from "@/server";
import { httpBatchLink } from "@trpc/client";

// tRPC instance that works for all server-side components.
const url =
  process.env.NODE_ENV === "production"
    ? "your-production-url/api/trpc" // change product url
    : "http://localhost:3000/api/trpc";

export const serverClient = appRouter.createCaller({
  links: [httpBatchLink({ url })],
});
