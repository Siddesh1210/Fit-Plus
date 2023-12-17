import { useNavigate } from "react-router-dom";

function DisplayExerciseDetail({bodyPart,gifUrl,name,instructions,equipment})
{

    const navigate=useNavigate();
    return(
        <>
        <div className="flex flex-wrap max-w-[1350px] mx-auto justify-evenly items-center my-10">
            <div className="basis-[35%] border-gray-100 border-2 rounded-3xl p-3">
                <img src={gifUrl} className="w-full"/>
            </div>
            <div className="basis-[45%] p-3 border-gray-100 border-2 rounded-3xl">
                <h3 className="text-2xl font-semibold mb-2 capitalize">Name : {name}</h3>
                <h3 className="text-xl my-2 capitalize">BodyPart : {bodyPart}</h3>
                <h3 className="text-xl my-2 capitalize">Equipment : {equipment}</h3>
                <h3 className="font-semibold text-xl">Steps : </h3>
                <ul>
                {
                    instructions?.map((item,index)=>
                    {
                        return(
                            <li key={index} className="text-lg text-justify">{index+1}.&nbsp;{item}</li>
                        )
                    })
                }
                </ul>
            </div>
        </div>
        <div className="flex flex-wrap justify-center">
            <button className="px-4 py-3 bg-[#fc3b00] text-lg text-black cursor-pointer  rounded-md text-center border-none" onClick={()=>{navigate(`/workout`)}}>Return Back to Body-Part</button>
        </div>
        </>
    )
}

export default DisplayExerciseDetail;