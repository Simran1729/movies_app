import { useState } from "react"

const Card = ({id, image, title, year, genre, price, description, removeMovie}) => {

    const [readMore, setreadMore] = useState(false);
    const info = readMore ? description :  `${description.substr(0, 200)}...`
    function handleReadMore(){
        setreadMore(!readMore)
    }
    return <>

        <div className = "text-black bg-neutral-100 flex flex-col w-96 rounded-lg shadow-lg shadow-slate-500 h-auto ">
            <img className = "w-full h-72 object-cover aspect-square rounded-md" src={image}/>
            <h3 className = "text-2xl px-2 pt-4 font-semibold">{title}</h3>
            <h3 className = "px-2 pt-1 font-medium">{year}</h3>
            <h3 className = "px-2 pt-1 font-medium">{genre}</h3>
            <h3 className = "px-2 pt-1 font-bold text-green-600 text-lg">$ {price}</h3>
            <div className={`px-2 pt-1 font-medium text-slate-700 overflow-hidden ${readMore? 'h-full' : 'ax-h-[120px]'}`}>
            {info}
            <span onClick={handleReadMore} className="cursor-pointer font-semibold text-blue-600">{readMore? 'Show Less' : 'Read More'}</span>
            </div>

            <div className="h-10 flex justify-center mt-3 mb-4">
            <button className = "text-lg bg-red-600 text-white h-10 w-52 rounded-lg self-center my-3 hover:bg-red-500 hover:scale-105 transition-all duration-300 shadow-lg shadow-gray-300" onClick={() => removeMovie(id)}>Not Interested</button>
            </div>
        </div>
    </>
}

export default Card
