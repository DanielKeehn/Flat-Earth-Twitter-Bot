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






//An Array of responses for tweet that searches for link
var linkTweetArray1 = ["#flatearth Interesting post by this fellow flat earther: ", "Someone understands the truth! ", "Definetly agree! Go check out the link ", 
						"And people think we are crazy: ", "#earthisflat Proof that the flat earth exists? ", "Like if you agree with this link! ", 
						"#flatearth YES! There is REAL evidence that the earth is flat ", "What do you have to say to this round earthers! ", 
						"This is why I love the flat earth community. " , "NASA is fake! Just look here! "]

var linkTweetArray2 = [ " This is part of the reason why I believe the earth is flat", " Interesting info", " Just another flat earth link #flatearth#NASAlies",
						" #flatearth", ": Just another link proving the earth is flat!", " #NASAlies", " Just here with some more flat earth info for you guys!", 
						": Just found this interesting link and I thought I would share it!", ": Just some interesting info #flatearth#flatearthsociety", 
						" Take a look at this!" ]

// This function finds a link of relating to the flat earth and returns it 
function linkTweet() {
	var linkArray = [];
	var tweetArray = [];
	T.get('search/tweets', getRandomHashtag(), function (error, data) {
		var tweets = data.statuses;
		for (var i = 0; i < tweets.length; i++) {
			userInfo = tweets[i].user;
			if (userInfo.lang == 'en') {
				tweet = tweets[i].full_text;
				if (tweet.includes('https:')) {
					var splitTweet = tweet.split(" ");
					tweetArray.push(splitTweet);
				}
			}
		}
		for (var t in splitTweet) {
			if (splitTweet[t].includes('https:')) {
				link = splitTweet[t];
				linkArray.push(link);
			}
		}
		
		var randomInt = getRandomInt(2);
		var randomLink = linkArray[Math.floor(Math.random()*linkArray.length)];
		if (randomInt == 0) {
			var randomDialogue = linkTweetArray1[Math.floor(Math.random()*linkTweetArray1.length)];
			T.post('statuses/update', { status: randomDialogue + randomLink}, function(err, data, response) {
			console.log(data)
			})
		} else if (randomInt == 1) {
			var randomDialogue = linkTweetArray2[Math.floor(Math.random()*linkTweetArray2.length)];
			T.post('statuses/update', { status: randomLink + randomDialogue}, function(err, data, response) {
			console.log(data)
			})
		}
	})
}





//An Array of responses for tweet that searches for link
var goFollowArray = ["Shoutout to @", "Everyone go follow @", "Support your fellow flat earther @", "I agree with you @", 
					"Don't agree that the earth is flat!, well talk to @", "We need more people like @", "Great proof that the Earth is flat @",
					"Couldn't have said it better myself @", "Search Twitter for @", "Good point @", "Interesting point @"]

var theySaidBlankArray = [". They said this: ", ". I definetly agree with this: ", ". Check out what they said: ", ". They state: ", ". They said: ",
							". They wisely said", ". They say things like this on their Twitter page: ", ". You will get more content like this on their Twitter page: "]

function shoutOutTweet() {
	var tweetDict = {};
	var user
	T.get('search/tweets', getRandomHashtag() , function(err, data, response) {
		var tweets = data.statuses;
  		for (var i = 0; i < tweets.length; i++) {
			userInfo = tweets[i].user;
			if (userInfo.lang == 'en' && tweets[i].full_text.includes('RT') == false && tweets[i].in_reply_to_status_id == null) {
				var myTweet = tweets[i].full_text;
				var userName = userInfo.screen_name;
				tweetDict[userName] = myTweet;
			}
		}
		var keys = [];
		for (var key in tweetDict) {
    		keys.push(key);
		}
		var randomUser = keys[Math.floor(Math.random()*keys.length)];
		var randomgoFollow = goFollowArray[Math.floor(Math.random()*goFollowArray.length)];
		var randomtheySaid = theySaidBlankArray[Math.floor(Math.random()*theySaidBlankArray.length)];
		T.post('statuses/update', { status: randomgoFollow + randomUser + randomtheySaid + tweetDict[randomUser]}, function(err, data, response) {
			console.log(data)
		})
	})
}







function retweetLatest() {
	T.get('search/tweets',  getRandomHashtag(), function (error, data) {
	  // log out any errors and responses
	  console.log(error, data);
	  // If our search request to the server had no errors...
	  if (!error) {
	  	// ...then we grab the ID of the tweet we want to retweet...
		var retweetId = data.statuses[0].id_str;
		// ...and then we tell Twitter we want to retweet it!
		T.post('statuses/retweet/' + retweetId, { }, function (error, response) {
			if (response) {
				console.log('Success! Check your bot, it should have retweeted something.')
			}
			// If there was an error with our Twitter call, we print it out here.
			if (error) {
				console.log('There was an error with Twitter:', error);
			}
		})
	  }
	  // However, if our original search request had an error, we want to print it out here.
	  else {
	  	console.log('There was an error with your hashtag search:', error);
	  }
	});
}










var scienceWordArray = ["Aberration", "Adhesion", "Aileron", "Alternation", "Altimeter", "Amplitude", "Atom", "Barograph", 
						"Buoyancy", "Calibration", "Calliper", "Cathode", "Centrifugal", "Centripetal", "Chronometer", 
						"Circulation", "Coefficient", "Cohesion", "Collination", "Commutator", "Compressibility", 
						"Concave", "Declination", "Demagnetization", "Density", "Depolarisation", "Deviation", "Diffraction", 
						"Displacement", "Ductility", "Ebullition", "Elasticity", "Electrification", "Electrode", "Electrolysis", 
						"Electroplating", "Elongation", "Equilibrant", "Fathometer", "Flotation", "Frequency", "Friction", 
						"Fulcrum", "Grating", "Hygrometer", "Inclination", "Incompressibility", "Induction", "Inertia", "Inference", 
						"Inflator", "Insulation", "Ionization", "Iridescence", "Isothermal", "Joule", "Kelvin", "Kinematics ", 
						"Lactometer", "Liquefaction", "Lux", "Magnitude", "Malleability", "Manometer", "Matter", "Meniscus", 
						"Mirage", "Momentum", "Myopia", "Neutrino ", "Neutron", "Newton", "Nucleus", "Nuclide", "Octave", 
						"Opaque", "Optics", "Oscillation", "Parallax", "Penumbra", "Photometer", "Polarisation", "Porosity", "Potentiality", 
						"Pressure", "Pulley", "Pyknometer", "Quantized", "Quantum", "Quarks", "Radiation", "Recoil", "Rectifier", "Refraction", 
						"Refractometer", "Repulsion", "Resonance", "Saturation", "Sensitized", "Solenoid", "Sonometer", "Spectrometer", 
						"Spectrum", "Spherometer", "Statics", "Tachometer", "Thermodynamics", "Thrust", "Torsion", "Transformer", 
						"Translucent", "Transmitter", "Transparent", "Turbine", "Ultrasonic", "Ultraviolet", "Umbra", "Unit", "Unsaturated", 
						"Vacuum", "Valve", "Vaporization", "Vector", "Velocity", "Vibration", "Viscosity", "Volatile", "Voltmeter", 
						"Volume", "Watts"]

var scienceWordPhrase = ["The Flat Earth theory is based on science! Here is a scientific word we believe in like all the 'noraml' people.",
						"Another scientific word I beleive in-", "I am just posting more scientific defintions to teach people we do beleive in SOME science.",
						"The Earth is not moving thousands and thousands of miles per hour, but some science is true such as", 
						"I just shake my head when people think flatearthers do not understand science, so here is just one example of science we beleive in!",
						"Just another scientific word from a flat earth beleiver NO WAY!", "I know I don't agree gravity is true, but at least we can all agree about ",
						"Isn't it fascinating flat earthers actually base things on science, let me just tell you guys about another scientific term to prove it.", 
						"This may not be about the flat earth but I like to show people us flat earthers agree with SOME science, the word today is", 
						"Some flat earthers really are interseted in real science, not fake science like at NASA, such as things like"]




function scienceWordSentence() {
	var randomWordPhrase = scienceWordPhrase[Math.floor(Math.random()*scienceWordPhrase.length)];
	var myString = randomWordPhrase + " ";
	return myString;
}

function scienceWordTweet() {
	var baseString = scienceWordSentence();
	var randomWord = scienceWordArray[Math.floor(Math.random()*scienceWordArray.length)];
	unirest.get("https://wordsapiv1.p.mashape.com/words/" + randomWord + "/definitions")	
		.header("X-Mashape-Key", "INSERT_API_KEY")
		.header("Accept", "application/json")
		.end(function (result) {
		var definitionsList = result.body.definitions;
		var getDefinition = definitionsList[0];
		var answer = getDefinition.definition;
		var tweet = baseString + randomWord + ": " + answer;
		T.post('statuses/update', { status: tweet }, function(err, data, response) {
			console.log(data)
		})
	});
}












function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function tweetIt() {
	var randomInt = getRandomInt(4);
	if (randomInt == 0) {
		linkTweet();
	} else if (randomInt == 1) {
		retweetLatest();
	} else if (randomInt == 2) {
		shoutOutTweet();
	} else if (randomInt == 3) {
		scienceWordTweet();
	}
}


tweetIt();
setInterval(tweetIt, 1000 * 60 * 60);





function followFlatEarthSocietyFollowers() {
	T.get('followers/ids', { screen_name: 'FlatEarthOrg' },  function (err, data, response) {
		var flatEarthIds = [];
		var num = 0;
  		var id = data.ids;
  		for (var i in id) {
  			if (num < 1000) {
  				flatEarthIds.push(id[num]);
  				num++;	
  			} else {
  				break;
  			}
  		}
  		var randomId = flatEarthIds[Math.floor(Math.random()*flatEarthIds.length)];
  		console.log(randomId);
		T.get('users/lookup', { screen_name: 'FlatEarthOrg' },  function (err, data, response) {
			console.log(data);
			console.log(data.name);
		})	
	})
} 
