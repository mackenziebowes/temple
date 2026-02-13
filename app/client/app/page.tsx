import ServerCheck from "./_components/ServerCheck";

export default function Home() {
  return (
    <div className="flex min-h-screen min-w-svw items-center justify-center bg-background font-sans text-foreground">
      <main className="flex flex-col w-full h-full items-center justify-center">
        <ServerCheck />
      </main>
    </div>
  );
}
