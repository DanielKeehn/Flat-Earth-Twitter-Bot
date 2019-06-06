// // function followFlatEarthSocietyFollowers() {
// // 	T.get('followers/ids', { screen_name: 'FlatEarthOrg' },  function (err, data, response) {
// // 		var flatEarthIds = [];
// // 		var num = 0;
// //   		var id = data.ids;
// //   		for (var i in id) {
// //   			if (num < 1000) {
// //   				flatEarthIds.push(id[num]);
// //   				num++;	
// //   			} else {
// //   				break;
// //   			}
// //   		}
// //   		var randomId = flatEarthIds[Math.floor(Math.random()*flatEarthIds.length)];
// //   		console.log(randomId);
// // 		T.get('users/lookup', { screen_name: 'FlatEarthOrg' },  function (err, data, response) {
// // 			console.log(data);
// // 			console.log(data.name);
// // 		})	
// // 	})
// // } 

// // var stream = T.stream('statuses/filter');

// // stream.on('follow', function (eventMsg) {
// //   ...
// // })


// // followFlatEarthSocietyFollowers();





















// //Rapid API KEY = L5ZIAFFyaOmsh2rPUITNgNG3mMCRp16mrKajsnH1nWahoYaDEe

// var unirest = require('unirest');

// //Our Twitter library
// var Twit = require('twit');

// // We need to include our configuration file
// var T = new Twit(require('./config.js'));

// //These are URL's of a search for the latest tweets on the flat earth related hastags 
// var flatearthSearch = {q: "#flatearth", count: 50, result_type: "recent", tweet_mode: 'extended'};
// var flatearthsocietySearch = {q: "#flatearthsociety", count: 50, result_type: "recent", tweet_mode: 'extended'}; 
// var earthisflatSearch = {q: "#earthisflat", count: 50, result_type: "recent", tweet_mode: 'extended'}; 
// var NASAliesSearch = {q: "#NASAlies", count: 50, result_type: "recent", tweet_mode: 'extended'};
// var researchflatearth = {q: "#researchflatearth", count: 50, result_type: "recent", tweet_mode: 'extended'};  
// var hashtagArray = [flatearthSearch,flatearthsocietySearch,earthisflatSearch,NASAliesSearch, researchflatearth];

// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }

// //Gets a random hashtag out of the list of created hashtags
// function getRandomHashtag() {
// 	var randomHashtag = hashtagArray[Math.floor(Math.random()*hashtagArray.length)];
// 	return randomHashtag;
// }



// var scienceWordArray = ["Aberration", "Adhesion", "Aileron", "Alternation", "Altimeter", "Amplitude", "Atom", "Barograph", 
// 						"Buoyancy", "Calibration", "Calliper", "Cathode", "Centrifugal", "Centripetal", "Chronometer", 
// 						"Circulation", "Coefficient", "Cohesion", "Collination", "Commutator", "Compressibility", 
// 						"Concave", "Declination", "Demagnetization", "Density", "Depolarisation", "Deviation", "Diffraction", 
// 						"Displacement", "Ductility", "Ebullition", "Elasticity", "Electrification", "Electrode", "Electrolysis", 
// 						"Electroplating", "Elongation", "Equilibrant", "Fathometer", "Flotation", "Frequency", "Friction", 
// 						"Fulcrum", "Grating", "Hygrometer", "Inclination", "Incompressibility", "Induction", "Inertia", "Inference", 
// 						"Inflator", "Insulation", "Ionization", "Iridescence", "Isothermal", "Joule", "Kelvin", "Kinematics ", 
// 						"Lactometer", "Liquefaction", "Lux", "Magnitude", "Malleability", "Manometer", "Matter", "Meniscus", 
// 						"Mirage", "Momentum", "Myopia", "Neutrino ", "Neutron", "Newton", "Nucleus", "Nuclide", "Octave", 
// 						"Opaque", "Optics", "Oscillation", "Parallax", "Penumbra", "Photometer", "Polarisation", "Porosity", "Potentiality", 
// 						"Pressure", "Pulley", "Pyknometer", "Quantized", "Quantum", "Quarks", "Radiation", "Recoil", "Rectifier", "Refraction", 
// 						"Refractometer", "Repulsion", "Resonance", "Saturation", "Sensitized", "Solenoid", "Sonometer", "Spectrometer", 
// 						"Spectrum", "Spherometer", "Statics", "Tachometer", "Thermodynamics", "Thrust", "Torsion", "Transformer", 
// 						"Translucent", "Transmitter", "Transparent", "Turbine", "Ultrasonic", "Ultraviolet", "Umbra", "Unit", "Unsaturated", 
// 						"Vacuum", "Valve", "Vaporization", "Vector", "Velocity", "Vibration", "Viscosity", "Volatile", "Voltmeter", 
// 						"Volume", "Watts"]

// var scienceWordPhrase = ["The Flat Earth theory is based on science! Here is a scientific word we believe in like all the 'noraml' people.",
// 						"Another scientific word I beleive in-", "I am just posting more scientific defintions to teach people we do beleive in SOME science.",
// 						"The Earth is not moving thousands and thousands of miles per hour, but some science is true such as", 
// 						"I just shake my head when people think flatearthers do not understand science, so here is just one example of science we beleive in!",
// 						"Just another scientific word from a flat earth beleiver NO WAY!", "I know I don't agree gravity is true, but at least we can all agree about ",
// 						"Isn't it fascinating flat earthers actually base things on science, let me just tell you guys about another scientific term to prove it.", 
// 						"This may not be about the flat earth but I like to show people us flat earthers agree with SOME science, the word today is", 
// 						"Some flat earthers really are interseted in real science, not fake science like at NASA, such as things like"]




// function scienceWordSentence() {
// 	var randomWordPhrase = scienceWordPhrase[Math.floor(Math.random()*scienceWordPhrase.length)];
// 	var myString = randomWordPhrase + " ";
// 	return myString;
// }

// function scienceWordTweet() {
// 	var baseString = scienceWordSentence();
// 	var randomWord = scienceWordArray[Math.floor(Math.random()*scienceWordArray.length)];
// 	unirest.get("https://wordsapiv1.p.mashape.com/words/" + randomWord + "/definitions")	
// 		.header("X-Mashape-Key", "L5ZIAFFyaOmsh2rPUITNgNG3mMCRp16mrKajsnH1nWahoYaDEe")
// 		.header("Accept", "application/json")
// 		.end(function (result) {
// 		var definitionsList = result.body.definitions;
// 		var getDefinition = definitionsList[0];
// 		var answer = getDefinition.definition;
// 		var tweet = baseString + randomWord + ": " + answer;
// 		T.post('statuses/update', { status: tweet}, function(err, data, response) {
// 			console.log(data)
// 		})
// 	});
// }

// scienceWordTweet();
// // function getTweet() {
// // 	var tweetList = [];
// // 	var randomTweet = "";
// // 	var randomTweetArray = [];
// // 	var num = 0;
// // 	T.get('search/tweets', getRandomHashtag() , function(err, data, response) {
// // 		var tweets = data.statuses;
// //   		for (var i = 0; i < tweets.length; i++) {
// // 			userInfo = tweets[i].user;
// // 			if (userInfo.lang == 'en' && tweets[i].full_text.includes('RT') == false && tweets[i].in_reply_to_status_id == null) {
// // 				var myTweet = tweets[i].full_text;
// // 				tweetList.push(myTweet);
// // 			}
// // 		}
// // 		randomTweet = tweetList[Math.floor(Math.random()*tweetList.length)];
// // 		randomTweetArray = randomTweet.split(" ");
// // 		num = 1;
// // 	})
// // 	while (num == 0) {
// // 		console.log("hi");
// // 	}

// // }

// // // 				unirest.get("https://wordsapiv1.p.mashape.com/words/" + randomTweetArray[words] + "/synonyms")	
// // // 				.header("X-Mashape-Key", "L5ZIAFFyaOmsh2rPUITNgNG3mMCRp16mrKajsnH1nWahoYaDEe")
// // // 				.header("Accept", "application/json")
// // // 				.end(function (result) {
// // // // 				console.log(result.status, result.headers, result.body);
// // // 					var synonyms = result.body.synonyms;
// // // 					if (synonyms != undefined) {
// // // 						var a = synonyms[0]
// // // 					}
// // //  			}	
// // //  		}	

// // getTweet();

// // // var a = []
// // // var cur;
// // // function test() {
// // // 	unirest.get("https://wordsapiv1.p.mashape.com/words/" + "ball" + "/synonyms")	
// // // 		.header("X-Mashape-Key", "L5ZIAFFyaOmsh2rPUITNgNG3mMCRp16mrKajsnH1nWahoYaDEe")
// // // 		.header("Accept", "application/json")
// // // 		.end(function (result) {
// // // 		var synonyms = result.body.synonyms;
// // // 		cur = synonyms;
// // // 		a.push(synonyms[0]);
// // // 	});
// // // 	console.log(cur);
		
// // // }

// // // test();