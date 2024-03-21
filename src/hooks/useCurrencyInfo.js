// CUSTOM HOOK 


import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    ).then((res) => res.json())  //the data that we get through the api is in the form of string. So this res.json converts the response into json
     .then((res) => setData(res[currency]))
}, [currency]);
   console.log(data);
   return data;
}

export default useCurrencyInfo
