export const ExerciseOption={
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export default async function fetchData(url,option)
  {
    const data=await fetch(url,option);
    const json=await data.json();
    return json;
  }