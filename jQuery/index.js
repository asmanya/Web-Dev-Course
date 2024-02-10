$("h1").addClass("big-Title margin"); // adds class

$("button"); // Selects all the buttons on the webpage

$("h1").removeClass("margin"); // removes class

$("h1").text("bye"); // updates content

$("button").html("<em>Dont click me.</em>") //updates html

console.log($("img").attr("src")); // getting attributes

$("a").attr("href", "https://www.udemy.com"); // setting attributes

console.log($("h1").attr("class")); // getting classes

$("h1").click(function() {  // evenListener click
    $("h1").css("color", "purple");
});

/*
earlier code

for(var i = 0; i < document.querySelectorAll("button").length; i++) { 
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        document.querySelector("h1").style.color = "purple";
    });
}

*/

$("button").click(function() {  // adding eventListeners
    $("h1").css("color", "purple");
});

$("input").keypress(function(event) {
    console.log(event.key);
    $("h1").text(event.key);
});

// another way of eventListener - use of on()
$("h1").on("mouseover", function() {
    $("h1").css("color", "green");
});


$("h1").before("<button>new1</button>");
// <button>new1</button><h1>hello</h1>

$("h1").after("<button>new2</button>");
// <h1>hello</h1><button>new2</button>

$("h1").prepend("<button>new3</button>");
// <h1><button>new3</button>hello</h1>

$("h1").append("<button>new4</button>");
// <h1>hello<button>new4</button></h1>

// $("button").remove(); // removes all buttons

$("button").on("click", function() {
    // $("h1").fadeToggle();
    // $("h1").slideToggle();
    // $("h1").animate({margin: "5%"});
    $("h1").slideUp().slideDown().animate({opacity : 0.5});
});
