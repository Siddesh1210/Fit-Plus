let arr=[1,2,3,4,5,6,7,8,9,9];
function Shimmer()
{
    return(
        <>
            {
                arr.map((index)=>
                {
                    return(
                        <div className='basis-[20%] p-4 border bg-[#fc3b00] mx-2 my-4 rounded-3xl animate-pulse' key={index}>
                            <div style={{width:"200px",height:"200px"}}></div>
                            <h3 style={{width:"200px",height:"30px"}}></h3>
                        </div>
                    )
                })
            }
        </>
    )
}

export default  Shimmer;