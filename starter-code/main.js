// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************
var memoryGame;

$(document).ready(function() {
    var memoryGame = new MemoryGame();
    memoryGame.shuffle();
    var html = '';

    memoryGame.cards.forEach(function(pic, index) {
        var sanitizedName = pic.name.split(' ').join('_');

        html += '<div class= "card" name="card_' + sanitizedName + '">';
        html += '<div class="back"';
        html += '    name="' + pic.name + '">';
        html += '</div>';
        html += '<div class="front" ';
        html += 'style="background: url(img/' + pic.img + '") no-repeat"';
        html += '    name="' + pic.name + '">';
        html += '</div>';
        html += '</div>';
    });

    // Add all the divs to the HTML
    document.getElementById('memory_board').innerHTML = html;

    $('.back').on('click', function() {
        console.log($(this), $(this).next());
        $(this).removeClass('back');
        $(this).siblings().addClass('back');
        memoryGame.selectCard($(this));
        memoryGame.finished();
    });
});
