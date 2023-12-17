import { Link } from "react-router-dom";
function ShowExercise({equipment,gifUrl,name,target,id})
{
    return(
        <Link to={`/exercise/${id}`} style={{textDecoration:"none",color:"black"}}>
            <div className="basis-1/4 m-3 p-2 text-center border cursor-pointer rounded-xl hover:scale-90 hover:transition-all duration-1000">
                <img src={gifUrl} style={{width:"200px",height:"200px"}}/>
                <h2 className="text-xl font-semibold capitalize">{name}</h2>
                <h2 className="text-lg capitalize">Target : {target}</h2>
                <h2 className="text-lg capitalize">Equipment : {equipment}</h2>
            </div>
        </Link>
    )
}

export default ShowExercise;