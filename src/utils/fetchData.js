export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': 'f6f1310788mshc1152382ad06a25p166e3ajsn83b903926726',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
}



