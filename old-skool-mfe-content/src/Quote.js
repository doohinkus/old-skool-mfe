import { useState, useEffect } from "react";

export default function Quote() {
  const [quote, setQuote] = useState("loading...");
  useEffect(() => {
    fetch("https://api.kanye.rest/")
      .then((res) => res.json())
      .then(({ quote }) => setQuote(quote))
      .catch((err) => setQuote("Oops something went wrong :("));
    return () => null;
  }, []);
  return (
    <>
      Kanye says: <em>{quote}</em>
    </>
  );
}
