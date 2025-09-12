
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black p-4 lg:p-8 overflow-hidden">
      <div className="relative w-full max-w-4xl">
        <div className="relative rounded-2xl bg-[#0c0c0c]">
          {children}
        </div>
      </div>
    </main>
  );
}
