import { useState, useEffect } from "react";
import sheetID from '../Data/Data'

export function CustomHook() {
    const [sheetD, setSheetD] = useState([]);
    useEffect(() => {
        fetch(sheetID)
            .then(res => res.json())
            .then(data => {
                setSheetD(data)
            })
            .catch(err => console.error(err));
    }, []);
    return {sheetD, setSheetD}
}