export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full w-full bg-gradient-to-br from-purple-800 to-blue-700 flex justify-center items-center">
      {children}
    </div>
  );
}
