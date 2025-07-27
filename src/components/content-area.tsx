interface ContentAreaProps {
  title?: string;
  subtitle?: string;
}

export function ContentArea({
  title = "Content-kun",
  subtitle = "chotto matte",
}: ContentAreaProps) {
  return (
    <div className="flex flex-col items-center justify-center p-2 py-4 gap-y-4 max-w-full w-full">
      <h1 className="text-primary text-4xl font-medium">{title}</h1>
      <p className="text-muted-foreground text-2xl">{subtitle}</p>
    </div>
  );
}
