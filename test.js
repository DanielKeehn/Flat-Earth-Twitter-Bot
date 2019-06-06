//Our Twitter library
var Twit = require('twit');

// We need to include our configuration file
var T = new Twit(require('./config.js'));

//These are URL's of a search for the latest tweets on the flat earth related hastags 
var flatearthSearch = {q: "#flatearth", count: 50, result_type: "recent", tweet_mode: 'extended'};
var flatearthsocietySearch = {q: "#flatearthsociety", count: 50, result_type: "recent", tweet_mode: 'extended'}; 
var earthisflatSearch = {q: "#earthisflat", count: 50, result_type: "recent", tweet_mode: 'extended'}; 
var NASAliesSearch = {q: "#NASAlies", count: 50, result_type: "recent", tweet_mode: 'extended'};
var researchflatearth = {q: "#researchflatearth", count: 50, result_type: "recent", tweet_mode: 'extended'};  
var hashtagArray = [flatearthSearch,flatearthsocietySearch,earthisflatSearch,NASAliesSearch, researchflatearth];

//Gets a random hashtag out of the list of created hashtags
function getRandomHashtag() {
	var randomHashtag = hashtagArray[Math.floor(Math.random()*hashtagArray.length)];
	return randomHashtag;
}

//Used for words API 
var unirest = require('unirest');



// This function finds a link of relating to the flat earth and returns it 
function linkTweet() {
	var linkArray = [];
	T.get('search/tweets', getRandomHashtag(), function (error, data) {
		console.log(data);
	})
}