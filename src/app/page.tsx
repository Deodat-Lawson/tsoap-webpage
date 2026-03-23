import { LandingPage } from "~/app/_components/landing-page";
import { api } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  return <LandingPage liveGreeting={hello.greeting} />;
}
