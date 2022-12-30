export const exerciseOptions = {
	method: "GET",
	url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
	headers: {
		"X-RapidAPI-Key": "76565b8c22mshf4bfba423ca2740p16d92ajsnd616ac39c3f9",
		"X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
	},
};
export const youtubeOptions = {
	method: "GET",
	url: "https://youtube-search-and-download.p.rapidapi.com/channel/about",
	headers: {
		"X-RapidAPI-Key": "76565b8c22mshf4bfba423ca2740p16d92ajsnd616ac39c3f9",
		"X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
	},
};
export const fetchData = async (url, options) => {
	const response = await fetch(url, options);
	const data = await response.json();

	return data;
};
