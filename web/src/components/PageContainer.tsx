export function PageContainer({ children }: { children: React.ReactNode }) {
  return <main className="mx-auto w-full max-w-[1440px] flex-1 px-5 py-7 sm:px-8 sm:py-9">{children}</main>;
}
