function changeMode(){
    var stylesheet = document.getElementById("stylesheet");
    if(stylesheet.href.includes("LightMode.css")){
        stylesheet.href = "DarkMode.css";
    }else{
        stylesheet.href = "LightMode.css";
    }
}

function displayComment(){
    var Comment = document.getElementById("comment").value;
    document.getElementById("commentToDisplay").innerText = Comment;
}

function heartChange(){
    var heart = document.getElementById("hearT");
    var likes = document.getElementById("LIKES");
    if(likes.innerText.includes("Likes: 0")){
        heart.src = "images/pngimg.com - heart_PNG51132.png";
        likes.innerText = "Likes: 1";
    }else{
        heart.src = "images/pngimg.com - heart_PNG51131.png";
        likes.innerText = "Likes: 0";
    }
}