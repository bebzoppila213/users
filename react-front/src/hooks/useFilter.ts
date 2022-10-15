import { useEffect, useState } from "react";



export default function<T extends Object>(data: Array<T>, fields: Array<keyof T>, defaultState:string){
    const [filterValue, setFilterValue] = useState(defaultState)
    const [filterState, setFilterState] = useState(data)
    
    
    const updateFilter = (newFilterValue: string) => {
        setFilterValue(newFilterValue)
    }

    useEffect(() => {
        setFilterState(data.filter(filterItem => fields.some((key) => String(filterItem[key]).toLowerCase().includes(filterValue.toLowerCase())) ))
    },[filterValue, data])


    return{
        filterValue,
        updateFilter,
        filterState
    }
}