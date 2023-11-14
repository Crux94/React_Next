"use client"

import {binarySearch} from "@/utils";
import { useState } from "react";

const sortedList = [1,5,10,50,100,122, 178, 601, 903, 1010];
const Algorithms = () => {
    const [searchNumber, setSearchNumber] = useState<null | number>(null);
    const [result, setResult] = useState<number | null>(null);

   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        if (isNaN(value)) {
            setSearchNumber(null);
            return;
        };
        setSearchNumber(value);
    }

    const handleButtonClick = (event: React.MouseEvent<HTMLInputElement>) => {
        setResult(binarySearch(searchNumber || 0, sortedList));
        console.log(result)
    }
    

    return (
        <div className="flex flex-col space-y-3">
            <label>
                <strong>binary search:</strong>
                <input type="number" placeholder="type number" value={String(searchNumber)} onChange={(e) => handleInputChange(e) }/>
            </label>
                <input type="button" className="w-fit p-3 border cursor-pointer rounded-lg bg-[#4566] border-[#4534]" value="search" onClick={(e) =>handleButtonClick(e)}/>
            <p className="text-[#8654]">{result}</p>
        </div>
    )
}

export default Algorithms;