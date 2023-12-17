import { useEffect, useState } from 'react';
import fetchData,{ExerciseOption} from '../utils/ExerciseOptions'
import ExerciseCard from './ExerciseCard';
import Shimmer from './Shimmer'
import {fetchExercise} from '../utils/ExerciseSlice'
import { useDispatch, useSelector } from 'react-redux';

function ExerciseList()
{
    const [data,setData]=useState([]);
    useEffect(()=>
    {
        async function getData()
        {
            let response=[];
            response=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',ExerciseOption);
            console.log(response)
            setData(response);
            console.log(data);
        }
        getData();
    },[])

    // const dispatch=useDispatch();

    // useEffect(()=>
    // {
    //     const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
    //     dispatch(fetchExercise(url));
    // }, [dispatch]);

    // const data=useSelector((store)=>store.exercise.exerciseItem);
    // console.log(data);

    return(
        <div className='flex max-w-[1350px] flex-wrap justify-around mx-auto mt-16'>
            {
                (data.length==0)?<Shimmer/>:data?.map((item,index)=>
                {
                    return(
                        <ExerciseCard key={index} exercise={item}/>
                    )
                })
            }
        </div>
    )
}

export default ExerciseList;