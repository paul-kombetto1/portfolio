const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const TARGET = `${BASE_PATH}/fr/`;

export default function RootPage() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0;url=${TARGET}`} />
      <p style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        Redirecting to <a href={TARGET}>{TARGET}</a>…
      </p>
    </>
  );
}
