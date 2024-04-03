//This is the code we typed into the console

//Try just the dollar sign
$

$('h1');

//Save it to variable:
var x = $('h1');

//You can easily edit the css properties:
x.css("color", "red");
x.css("background", "blue");

//Multiple CSS properties at once
var newCSS = {
    "color":"white",
    "background":"blue",
    "border":"red"
}

x.css(newCSS);

//Grabbing multiple returns an array-like object:
var listItems = $('li');

//Change all items:
listItems.css("color", 'red');

//Grab a particular index item:
listItems.eq(0).css('color', 'blue');
listItems.eq(1).css('color', 'purple');

//LastItem
listItems.eq(-1).css('color', 'red');

//Grabbing Text:
$('h1').text()

$('h1').text("Brand New Text!")

//Grabbing HTML
$('h1').html("<em>Now in Italics</em>")

//Changing an attribute
$("input").eq(1).attr('type', 'checkbox');

//Changing values
$("input").eq(0).attr('value', "BRAND NEW VALUE");

//Can do this more directly:
$("input").eq(0).val("cleared up");

//Add a class
$('h2').addClass("turnRed");

//Remove a class
$('h2').removeClass("turnRed");

//Toggle the Class on and off
$("h3").addClass("turnBlue");

