import { useEffect, useState } from "react";


function useCurrency(currency){
const [data, setdata] = useState({})

    useEffect(()=>{fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then((res)=>{
        return res.json()
    })
    .then((res)=> setdata(res[currency]))

    },[currency])
return data
}

export default useCurrency;
