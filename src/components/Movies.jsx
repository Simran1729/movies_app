import Card from "./Card"

const Movies = ({data, removeMovie}) => {
    return <>
        <div className = "flex flex-row justify-center flex-wrap gap-8">
            {data.map((movie) => <Card key={movie.id} {...movie} removeMovie = {removeMovie} /> )}
        </div>
    </>
}

export default Movies