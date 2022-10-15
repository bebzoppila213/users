import { useState, useEffect } from 'react'


export default function<T>(url: string, defaultState: T){
    const [data, setData] = useState<T>(defaultState)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((result) => {
            setIsLoading(true)
            setData(result)
        })
    } ,[])

    return {data, isLoading}
}