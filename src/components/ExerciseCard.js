import backImage from '../ExerciseImage/back.png'
import cardioImage from '../ExerciseImage/cardio.png'
import chestImage from '../ExerciseImage/chest.png'
import lower_armImage from '../ExerciseImage/lowerarm.png'
import lower_legImage from '../ExerciseImage/lowerleg.png'
import neckImage from '../ExerciseImage/neck.png'
import shoulderImage from '../ExerciseImage/shoulder.png'
import upperarmImage from '../ExerciseImage/upperarm.png'
import upperlegImage from '../ExerciseImage/upperleg.png'
import waistImage from '../ExerciseImage/waist.png'
import { Link } from 'react-router-dom'

function ExerciseCard({exercise})
{

    const exerciseImages = {
        back: backImage,
        cardio: cardioImage,
        chest: chestImage,
        "lower arms":lower_armImage,
        "lower legs":lower_legImage,
        neck:neckImage,
        shoulders:shoulderImage,
        "upper arms":upperarmImage,
        "upper legs":upperlegImage,
        waist:waistImage
        
    };

    // Get the image source based on the exercise name
    const exerciseImage = exerciseImages[exercise];


    return(
        <Link to={`/bodyPart/${exercise}`} style={{textDecoration:"none",color:"none"}}>
        <div className='basis-[20%] p-4 border bg-[#fc3b00] text-black text-center mx-2 my-4 rounded-3xl cursor-pointer hover:scale-90 hover:transition-all duration-1000'>
            <img src={exerciseImage} style={{width:"200px",height:"200px",objectFit:"contain"}}/>
            <h3 className='text-2xl font-semibold pt-3 capitalize'>{exercise}</h3>
        </div>
        </Link>
    )
}

export default ExerciseCard;