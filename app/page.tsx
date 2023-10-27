// run on server side
import Test from "@/components/test";
import { serverClient } from "./_trpc/serverClient";

export default async function Home() {
  const data = await serverClient.getData();
  const dataSet = await serverClient.setData("test-data");
  const users = await serverClient.getUsers();

  return (
    <main>
      <div>{data}</div>
      <div>{dataSet}</div>
      <div>{JSON.stringify(users)}</div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
