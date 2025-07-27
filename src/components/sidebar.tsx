import Link from "next/link";

interface SidebarProps {
  title?: string;
  links?: Array<{
    href: string;
    label: string;
  }>;
}

export function Sidebar({
  title = "Sidebar-san",
  links = [
    { href: "#", label: "hi" },
    { href: "#", label: "hi 2" },
    { href: "#", label: "hi 3" },
    { href: "#", label: "hi 4" },
  ],
}: SidebarProps) {
  return (
    <div className="flex flex-col max-w-64 w-full border border-border p-2 rounded-xl">
      <Link
        href="/"
        className="text-2xl font-medium w-fit ml-2 pb-2 hover:text-foreground/70 transition-all duration-150"
      >
        {title}
      </Link>
      <div className="border-t border-border" />
      <div className="flex flex-col pt-4 gap-y-2 flex-grow">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="hover:bg-primary/5 p-2 text-lg rounded hover:scale-102 transition-all duration-150"
          >
            {link.label}
          </a>
        ))}
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
  );
}
