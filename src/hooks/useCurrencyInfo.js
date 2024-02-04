import { useEffect, useState } from "react"


function useCurrencyInfo(currency){
    const [data,setData] = useState({})
    const API_ADD = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    useEffect(()=>{
        fetch(API_ADD)
        .then((resp)=>resp.json())
        .then(((resp)=>setData(resp[currency])))
    },[currency])
    return data
}

export default useCurrencyInfo;