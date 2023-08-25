export default function ComplexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-screen w-screen px-24 py-12 max-sm:px-2">
      {children}
    </main>
  );
}
