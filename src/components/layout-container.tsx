interface LayoutContainerProps {
  children: React.ReactNode;
}

export function LayoutContainer({ children }: LayoutContainerProps) {
  return (
    <main>
      <div className="text-foreground bg-background min-h-screen">
        <div className="flex min-h-screen p-2">{children}</div>
      </div>
    </main>
  );
}
