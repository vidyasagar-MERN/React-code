import { useEffect, useState } from "react";

function useCurracyinfo(currancy) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currancy}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currancy] || {}))
      .catch((error) => console.log("Error:", error));
  }, [currancy]);

  return data;
}

export default useCurracyinfo;
