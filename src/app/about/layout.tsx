export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="bg-[#fff] min-h-screen">
        <section>{children}</section>
      </div>
    );
  }
  