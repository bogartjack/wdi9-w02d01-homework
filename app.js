//1. Questions

	//a. boolean, light = true
	//b. string, email = blob@dork.com
	//c. object, ship = {hull: 100, blasters: 2, beam: 15, drive: c}
	//d. array, names = [jill, jack, doug, matt]
	//e. array of objects, students = [{name: doug, loc: cleveland}, {name: matt, loc: cincinnati}]
	//f. array of objects w/ arrays = [{name: doug, loc: cleveland, shows: [friends, ozark]}]

//2. Take it Easy

	const arr = ['red', 'green', 'yellow', 'blue', 'indigo', 'violet'];

	const blue = arr[3];
	const Jack = {food: 'pizza', hobby: 'running', town: 'Arvada', type: 'booleans'};
	const fav = Jack.hobby;

//3. Crazy Object

	const crazyObject = {
	  taco: [
	    {
	      meat: 'steak',
	      cheese: ['panela', 'queso', 'chihuahua']
	    },
	    {
	      meat: 'chicken',
	      salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
	    },
	  ],
	  larry: {
	    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
	    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
	    characters: [
	      {
		name: "Jeff",
		occupation: "manager"
	      },
	      {
		name: "funkhauser",
		occupation: "tv dude"
	      },
	      {
		name: "susie",
		occupation: "jeffs wife",
		favourtieHobby: "Swearing at Larry and Jeff"
	      },
	    ]
	  }
	}

	console.log(crazyObject.taco[1].salsa[5]);
	console.log(crazyObject.larry.quotes[0]);
	console.log(crazyObject.larry.characters[2].favourtieHobby);
	console.log(crazyObject.larry.nicknames[1]);
	console.log(crazyObject.larry.characters);
