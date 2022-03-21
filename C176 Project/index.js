let words = [
    {
        "inputs": 12,
        "category": "Boy Band",
        "word": "OneDirection"
    },
    {
        "inputs": 13,
        "category": "European Country Name",
        "word": "UnitedKingdom"
    },
    {
        "inputs": 5,
        "category": "City in India",
        "word": "Delhi"
    },
    {
        "inputs": 7,
        "category": "Famous App",
        "word": "Spotify"
    },
]



$(function() {
    $(".input_field").keyup(function() {
        let id = $(this).attr("id")
        let input_word = id.split("_")[1]
        $(".rep_input").eq(input_word).html($(this).val())
    })
})


function fillBlanks(randomWord) {
    $("#blanks").empty();

    for (let i = 0; i < randomWord.inputs; i++) {
        let input_html = `<span class="fill_blanks" id="input_${i}">_</span>`
        $("#blanks").append(input_html);
    }
}

$("#hint").html(randomWord.category)


var gameOver = false
$(".clickable").click(function (){
    var correctGuess = false;

    let id = $(this).attr("id");

    var life = parseInt($("#life".text()))

    for (var i = 0; < randomWord.word.length; i++) {
        if (randomWord.word.charAt(i).toLowerCase() == id){
            if(life > 0 && ($(".fill_blanks".eq(i).html() == "__" || $(".fill_blanks").eq(i).html() == id))){


                $(".fill_blanks"),eq(i),html(id);
                correctGuess - true;


                if($("#blanks").text() === randomWord.word.toLowerCase()) {
                    $("#result").text("You Win!!")
                    correctGuess = true;
                    gameOver = true
                }
            }
        }
    }
})