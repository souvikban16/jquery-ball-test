counter=0;
var colors=['red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 'black', 'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick','crimson']

$('#clicky').click(function(){
    counter+=1;
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    console.log(randomColor);
    $("<div class='ball child inline-block-child' id=ball"+counter+"></div>").insertBefore("#inserter");
    $("#ball"+counter).css({
        background: randomColor
    })
});