import React, { useState } from "react";
import Header from "./components/Header";
const App = () => {
  const [word, setWord] = useState("");
  const [wordMeanings, setWordMeanings] = useState([]);
  const handleSearch = async () => {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await response.json();
    setWordMeanings(data[0].meanings[0].definitions);
  };
  return (
    <>
      <Header />
      <div className="flex mx-auto w-4/5 items-center flex-col gap-4 my-8">
        <div className=" w-3/5   flex justify-between ">
          <input
            type="text"
            className="w-96 h-10 border border-gray-300 rounded-md px-2 bg-amber-50 outline-none focus:border-amber-600 "
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <button
            className="bg-amber-500 text-white font-semibold px-4 py-2 rounded cursor-pointer"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="flex flex-col gap-4 items-start justify-center">
          {wordMeanings.map((meaning) => (
            <div className="w-full  border-2 border-amber-400 px-4 py-8 bg-amber-100 rounded-lg">
              <p key={meaning.definition}>{meaning.definition}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
