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