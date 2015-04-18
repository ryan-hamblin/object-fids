//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

//code here

var me = {};

me.name = "Ryan";
me.age = 28;

alert(me.name);

//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category. 

var favoriteThings = {};

favoriteThings.band = 'Guster';
favoriteThings.food = 'Pizza';
favoriteThings.person = 'Chelsey';
favoriteThings.book = 'The Giver';
favoriteThings.movie = 'Fight Club';
favoriteThings.holida = 'Halloween';
console.log(favoriteThings);
//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.
favoriteThings.car = 'Subaru';
favoriteThings.brand = 'Target';
console.log(favoriteThings);

//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'. 

favoriteThings.food = 'Lettuce';
favoriteThings.book = '50 Shades of Gray';


alert(favoriteThings.person);
alert(favoriteThings.book);

//Now, alert your favorite person, then alert your favorite book.


//Create an empty Object called backPack. Now, create a variable called 'item' and set it equal to firstPocket. Now, using bracket notation, add whatever 'item' represents as a property (or key) on the backPack object and set it's value equal to 'chapstick'. Now using dot notation add a key (or property) to your backPack object that is named color, with the value being the color of your backpack. 

var backpack = {};

var item = "firstPocket";
backpack[item];
backpack[item] = 'chapstick';
backpack.color = 'green';

console.log(backpack);

//After you do the above, alert your entire backPack object.

//You probably noticed that it just alerted [Object Object]. Alerting to see the data in your Object doesn't work so well. Instead, console.log your whole backPack object and then check out the console.

//Replace this with your code, then click 'Run'.

// NEXT PROBLEM 


//Create another 'me' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

var me = {};

me.name = 'Ryan';
me.age = '28';
me.height = '6 \'1';
me.gender = 'male';
me.married = 'yes';
me.eyeColor = 'blue';
me.hairColor = 'redish brown';

for(var key in me){
	alert(me[key]);
};

//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc



//NEXT PROBLEM

//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song. 


var album = {};

album.Goose = 2.5;
album.Bart  = 5.6;
album.Beef  = 4;
album.Mood  = 12;
album.Beer  = 55;


//Now, loop through your album object alerting every song title individually.

//Replace this with your code.

for(var key in album){
	alert(key);
}

//NEXT PROBLEM


//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate). 

var states = {};

states.Utah = 4000000;
states.California = 27000000;
states.Vermont = 10000;
states.Colordo = 11223344;
states.Virginia = 12;
states.Washington = 10000;


//Now, loop through your states object and if the states population is greater than 30K, alert that state.

for(var key in states){
	if(states[key] >30000){
		alert(key);
	}
};



var user = {
    name: 'Tyler McGinnis', 
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}

//Above you're given a user object. Loop through the user object checking to make sure that each value is truthy. If it's not truthy, remove it from the object. hint: 'delete'.

for(var key in user){
	if(!user[key]){
		delete user[key];
	}
}


//Once you get your truthy array, Change the remaining values in the array to be specific to you (name: 'your name', username: 'your username'), rather than my information.

//Replace with Code



//Now console.log your object and make sure it looks right.


