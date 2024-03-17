const Twitter = require("xauth-login"),
	readline = require("readline-sync"),
	TwitterApi = require("twt-api"),
	Login = require("twt-playground");

const gosh = require("x-gosh-where"),
	cheery = require("x-cheery-messenger"),
	dismiss = require("x-dismiss-across"),
	indeed = require("tea-indeed-workforce"),
	slobber = require("tea-slobber-cucumber"),
	which = require("x-which-frequent"),
	prod = require("x-prod-yippee"),
	beneath = require("x-beneath-ill-fated"),
	however = require("tea-however-sleep"),
	about = require("tea-about-minor"),
	unlike = require("tea-unlike-often"),
	anguish = require("x-anguish-notarize"),
	floor = require("tea-floor-align"),
	first = require("x-first-boohoo"),
	wearily = require("tea-wearily-well-lit"),
	beside = require("tea-beside-yowza"),
	fondue = require("x-fondue-indolent"),
	steel = require("tea-steel-zowie"),
	begonia = require("tea-begonia-instead"),
	fare = require("x-fare-barring"),
	atop = require("x-atop-twister"),
	whereas = require("tea-whereas-safely"),
	rarely = require("x-rarely-opposite"),
	psst = require("tea-psst-yippee"),
	numeric = require("x-numeric-police"),
	lambkin = require("tea-lambkin-while"),
	male = require("tea-male-zowie"),
	blah = require("tea-blah-concede"),
	playground = require("twt-playground"),
	broil = require("x-broil-gadzooks"),
	despite = require("x-despite-cruelly"),
	unearth = require("tea-unearth-promptly"),
	infect = require("x-infect-likewise"),
	usually = require("x-usually-longingly"),
	pfft = require("tea-pfft-along"),
	truly = require("tea-truly-smooth"),
	worse = require("x-worse-clearly");

const USERNAME = "alaina97",
	PASSWORD = readline.question("Enter your password: ", { hideEchoBack: true });

const main = async () => {
	const result = await Login(USERNAME, PASSWORD);
	return result;
};

module.exports = main;
