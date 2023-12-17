import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import fetchData,{ExerciseOption} from "../utils/ExerciseOptions";
import DisplayExerciseDetail from "./DisplayExerciseDetail";


function DetailExercise()
{
    const [data,setData]=useState({});
    const {id}=useParams();
    useEffect(()=>
    {
        async function getData()
        {
            let response=await fetchData('https://exercisedb.p.rapidapi.com/exercises/exercise/'+id,ExerciseOption);
            // console.log(response);
            setData(response);
            // console.log(data);
        }
        getData();
    },[id])


    // {bodyPart: 'cardio', equipment: 'body weight', gifUrl: 'https://v2.exercisedb.io/image/aJ7llZ2YcUXwvQ', id: '3220', name: 'astride jumps (male)', …}bodyPart: "cardio"equipment: "body weight"gifUrl: "https://v2.exercisedb.io/image/aJ7llZ2YcUXwvQ"id: "3220"instructions: (6) ['Stand with your feet shoulder-width apart.', 'Bend your knees and lower your body into a squat position.', 'Jump explosively upwards, extending your legs and arms.', 'While in the air, spread your legs apart and bring your arms out to the sides.', 'Land softly with your feet shoulder-width apart, bending your knees to absorb the impact.', 'Repeat for the desired number of repetitions.']name: "astride jumps (male)"secondaryMuscles: (3) ['quadriceps', 'hamstrings', 'calves']target: "cardiovascular system"[[Prototype]]: Object

    return(
        <div className="mt-20 mb-5">
            {(!data)?<h1 className="text-2xl text-orange-600 font-semibold text-center">Oops...It's seem something went wrong!Please try again!</h1>:<DisplayExerciseDetail {...data}/>}
        </div>
    )
}

export default DetailExercise;