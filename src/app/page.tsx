import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="text-foreground bg-background min-h-screen">
        <div className="flex min-h-screen p-2">
          <div className="flex flex-col max-w-64 w-full border border-border p-2 rounded-xl">
            <Link
              href="/"
              className="text-2xl font-medium w-fit ml-2 pb-2 hover:text-foreground/70 transition-all duration-150"
            >
              Sidebar-san
            </Link>
            <div className="border-t border-border" />
            <div className="flex flex-col pt-4 gap-y-2 flex-grow">
              <a
                href="#"
                className="hover:bg-primary/5 p-2 text-lg rounded hover:scale-102 transition-all duration-150"
              >
                hi
              </a>
              <a
                href="#"
                className="hover:bg-primary/5 p-2 text-lg rounded hover:scale-102 transition-all duration-150"
              >
                hi 2
              </a>
              <a
                href="#"
                className="hover:bg-primary/5 p-2 text-lg rounded hover:scale-102 transition-all duration-150"
              >
                hi 3
              </a>
              <a
                href="#"
                className="hover:bg-primary/5 p-2 text-lg rounded hover:scale-102 transition-all duration-150"
              >
                hi 4
              </a>
            </div>
            <div className="border-t border-border rounded-xl p-2 py-2 pt-4 flex flex-col gap-y-2 items-center">
              <Link
                href="https://github.com/keircn"
                target="_blank"
                className="text-sm -ml-2 text-muted-foreground hover:text-foreground transition-all duration-150 max-w-fit"
              >
                GitHub
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-2 py-4 gap-y-4 max-w-full w-full">
            <h1 className="text-primary text-4xl font-medium">Content-kun</h1>
            <p className="text-muted-foreground text-2xl">chotto matte</p>
          </div>
        </div>
      </div>
    </main>
  );
}
