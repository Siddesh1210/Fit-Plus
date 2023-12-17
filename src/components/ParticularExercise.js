import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import ShowExercise from './ShowExercise';
import { fetchBody } from '../utils/ExerciseSlice';
import { useDispatch,useSelector } from 'react-redux';
import fetchData,{ExerciseOption} from '../utils/ExerciseOptions';


const ParticularExercise = () => {
    const {name}=useParams();
    // console.log(name);

    const [data,setData]=useState([]);
    useEffect(()=>
    {
        async function getData()
        {
            let response=[];
            response=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPart/'+name,ExerciseOption);
            console.log(response)
            setData(response);
            console.log(data);
        }
        getData();
    },[])

    // const dispatch=useDispatch();
    // useEffect(()=>
    // {
    //     const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/'+name;
    //     dispatch(fetchBody(url));
    // }, [dispatch]);

    // const data=useSelector((store)=>store.exercise.bodyPartItem);
    // console.log(data);

  return (
    <>
        {(data.length==0)?null:<h1 className='text-4xl capitalize text-center mt-24 mb-8  font-extrabold' style={{WebkitTextStroke:"1px #fc3b00",color:"transparent"}}>Below are best curated <span className='text-[#fc3b00]'>{name} exercise</span> for you</h1>}

        <div className='flex max-w-[1350px] mx-auto flex-wrap justify-evenly'>
            {
                (data.length==0)?<h1 className='text-center text-4xl text-[#fc3b00] mt-24 font-extrabold mb-8'>Please wait while we find<span className='text-[#fc3b00]'> best workout plan </span>for you.</h1>:data.map((item)=>
                    {
                        return (<ShowExercise {...item} key={item.id}/>)
                    })
            }
        </div>
    </>
  )
}

export default ParticularExercise