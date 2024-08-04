import { useState } from "react"
import Movies from "./components/Movies"
import data from "./data"

function App() {
  
  const [movies, setMovies] = useState(data);

  function removeMovie(id){
    setMovies(movies.filter((movie) => movie.id !== id))
  }

  if(movies.length === 0){
    return (
      <>
        <div className = "flex flex-col justify-center items-center h-screen w-screen font-popp">
          <div className = "text-4xl mb-4">No More Movies</div>
          <button className = "text-xl bg-gray-300 border-2 border-gray-400 px-5 py-1 rounded-md hover:cursor-pointer hover:bg-gray-200 hover:scale-105 transition-all duration-300" onClick={() => setMovies(data)}>Refresh</button>
        </div>

        
      </>
    )
  }
  
  return (
    <>
      <div className = "w-screen h-screen font-popp flex flex-col">
        <h1 className = "text-center text-7xl bg-yellow-400  w-auto self-center mb-9 mt-6 rounded-2xl py-3 px-6 font-bold">IMdb</h1>
        <Movies data = {movies} removeMovie = {removeMovie}></Movies>
      </div>
    </>
  )
}

export default App
