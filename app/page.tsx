// run on server side
import Test from "@/components/test";
import { serverClient } from "./_trpc/serverClient";

export default async function Home() {
  const data = await serverClient.getData();
  const dataSet = await serverClient.setData("test-data");

  return (
    <main>
      <div>{data}</div>
      <div>{dataSet}</div>
    </main>
  );
}
