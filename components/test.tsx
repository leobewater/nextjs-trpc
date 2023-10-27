"use client";
// run on client side

import { trpc } from "@/app/_trpc/client";

export default async function Test() {
  const getData = trpc.getData.useQuery({});

  const setData = trpc.setData.useMutation({
    // your react-query properties ...
  });

  return (
    <main>
      <div>{getData.data}</div>
      <div>{setData.data}</div>
    </main>
  );
}
