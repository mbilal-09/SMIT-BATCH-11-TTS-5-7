export default function AboutLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      <h1 className="m-2 pl-3 text-3xl">Home {">"} About</h1>
      {children}
    </section>
  );
}
