export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
       'X-RapidAPI-Key': 'f6f1310788mshc1152382ad06a25p166e3ajsn83b903926726',
       'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }

};

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
};



