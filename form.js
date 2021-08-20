heading=createElement("h1");
scoreboard=createElement("h1");
scoreboard.html("Score: "+score)
scoreboard.style('color:red')
scoreboard.position(width-200,20)

function handleBubbleCollision(bubbleGroup){
    if (life>0){
        score=score+1;
        bulletGroup.destroyEach()
        bubbleGroup.destroyEach()
    }
}

swal({
    title: "Game Over"
    text: "Oops you lost the game....!!!!!",
    text: "You Scored: " + score,
    imageURL:http://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png?v=1571606114
    imageSize: "100x100"
    confirmButtonText: "thanks for playing! :D :D"
});