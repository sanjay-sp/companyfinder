import React, { useEffect } from "react";
import SearchBar from "../components/SearchBar/SearchBar";

const HomePage = () => {
  useEffect(() => {
    fetch("https://www.zaubacorp.com/custom-search", {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "sec-ch-ua":
          '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest",
        "access-control-allow-origin": "*",
      },
      referrer: "https://www.zaubacorp.com/company-list",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: "search=s&filter=company",
      method: "POST",
      mode: "cors",
      credentials: "include",
    }).then((res) => console.log(res));
  }, []);
  return (
    <div className="homepage">
      <SearchBar />
    </div>
  );
};

export default HomePage;
