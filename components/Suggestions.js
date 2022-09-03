
import minifaker, { jobTitle, username } from "minifaker";
import React, { useEffect, useState } from "react";

export default function Suggestions(){
    const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const suggestions = minifaker.array(5, (i) => ({
      username: minifaker.username({ locale: "en" }).toLowerCase(),
      jobTitle: minifaker.jobTitle(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);
    return <div className="mt-4 ml-10">
        <div className="flex justify-between mb-5 text-sm">
            <h3 className=" font-bold"> Suggestions</h3>
            <button className="text-gray-600 font-bold">See all</button>
        </div>
        {suggestions.map(suggestions =>(
            <div className="flex items-center justify-between mt-3">
                <img className="h-10 rounded-full border p-[2px] " src={`https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`} alt="" />
                <div className=" flex-1 ml-4">
                    <h2 className="font-semibold text-gray-600 text-sm">{suggestions.username}</h2>
                    <h3 className="text-sm text-gray-200 truncatew-[230px]">{suggestions.jobTitle}</h3>
                </div>
                <button className="font-semibold text-blue-400 text-sm">Follow</button>
            </div>
        ))}
    </div>
}