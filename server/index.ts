import { z } from "zod";
import { publicProcedure, router } from "@/server/trpc";

// appRouter which acts as a hub for your API procedures.
export const appRouter = router({
  getData: publicProcedure.query(async () => {
    // Here you would fetch data from a database in a
    // real-life application.
    console.log("FROM SERVER: getData");
    return "getData";
  }),
  setData: publicProcedure.input(z.string()).mutation(async ({ input }) => {
    // Here you would update a database using the
    // input string passed into the procedure
    console.log("FROM SERVER INPUT:", input);
    return input;
  }),
  getUsers: publicProcedure.query(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    console.log(users);
    return users;
  }),
});

// This type will be used as a reference later...
export type AppRouter = typeof appRouter;
