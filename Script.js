window.addEventListener("DOMContentLoaded", function () {
    var banner = document.querySelector(".banner");
    var bannerImage = document.querySelector(".banner .left-img");
    var bannerHeading = document.querySelector(".banner .heading h1");
    var bannerText = document.querySelector(".banner .heading p");
  
    // Set the default banner image and text
    banner.style.backgroundImage = "url(banner1.svg)";
    bannerImage.setAttribute("src", "image.png");
    bannerHeading.textContent = "Deep Focus";
    bannerText.textContent = "Keep your focus and enjoy the serenity";
  });
  
function playAll(songNumber){
    var audioElement= document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    var songFileName = "music/"+songNumber+".mp3";
    var currentRow= document.getElementById("song"+songNumber);
    var banner = document.querySelector(".banner");
    var bannerImage = document.querySelector(".banner .left-img");
    var bannerHeading = document.querySelector(".banner .heading h1");
    var bannerText = document.querySelector(".banner .heading p");

    if(audioElement.getAttribute("src")==songFileName && !audioElement.paused){
        audioElement.pause();
        playBtn.innerHTML='<img src="play-button.svg">';
        
        banner.style.backgroundImage = "url(banner1.svg)";
        bannerImage.setAttribute("src", "image.png");
        bannerHeading.textContent = "Deep Focus";
        bannerText.textContent = "Keep your focus and enjoy the serenity";
    }
    else{
        audioElement.setAttribute("src",songFileName);
        audioElement.play();
        playBtn.innerHTML='<img src="pause-button.svg">';
       
        if (songNumber === 1) {
            banner.style.backgroundImage = "url(b01.png)";
            bannerImage.setAttribute("src", "image 1.png");
            bannerHeading.textContent = "Mike Posner - I took a pill in Ibiza ";
            bannerText.textContent = "By Mike Posner";
        } else if (songNumber === 2) {
            banner.style.backgroundImage = "url(b02.png)";
            bannerImage.setAttribute("src", "image 2.png");
            bannerHeading.textContent  = "Ghar ";
            bannerText.textContent = "By Pritam";
        }
        else if (songNumber === 3) {
            banner.style.backgroundImage = "url(b03.png)";
            bannerImage.setAttribute("src", "image 3.png");
            bannerHeading.textContent = "Kahi to hogi woh";
            bannerText.textContent = "By Nidhi Hegde";
        }
        else if (songNumber === 4) {
            banner.style.backgroundImage = "url(b04.png)";
            bannerImage.setAttribute("src", "image 4.jpg");
            bannerHeading.textContent = "Kasoor";
            bannerText.textContent = "By Prateek Kuhad";
        }
        else if (songNumber === 5) {
            banner.style.backgroundImage = "url(b05.png)";
            bannerImage.setAttribute("src", "image 5.png");
            bannerHeading.textContent = "Tu Hai Kahan";
            bannerText.textContent = "By AUR";
        }
        else if (songNumber === 6) {
            banner.style.backgroundImage = "url(b06.png)";
            bannerImage.setAttribute("src", "image 6.png");
            bannerHeading.textContent = "Baarishein ";
            bannerText.textContent = "By Anuv Jain";
        }
        else if (songNumber === 7) {
            banner.style.backgroundImage = "url(b07.png)";
            bannerImage.setAttribute("src", "image 7.jpg");
            bannerHeading.textContent = "Waqt Ki Baatein";
            bannerText.textContent = "By Dream Note";
        }
        else if (songNumber === 8) {
            banner.style.backgroundImage = "url(b08.png)";
            bannerImage.setAttribute("src", "image 8.png");
            bannerHeading.textContent = "Lovely feat.";
            bannerText.textContent = "By Ishaan Kaushik";
        }
        else if (songNumber === 9) {
            banner.style.backgroundImage = "url(b09.png)";
            bannerImage.setAttribute("src", "image 9.png");
            bannerHeading.textContent = "Let me down slowly ";
            bannerText.textContent = "By Alec Benjamin";
        }
        else if (songNumber === 10) {
            banner.style.backgroundImage = "url(b010.png)";
            bannerImage.setAttribute("src", "image 10.jpeg");
            bannerHeading.textContent = "Jee Le Zara ";
            bannerText.textContent = "By Vishal Dadlani";
        }
    }
}

function playaudio(){
    var audio=document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    if(audio.paused){
        audio.play();
        playBtn.innerHTML='<img src="pause-button.svg">';
    }
    else{
        audio.pause();
        playBtn.innerHTML='<img src="play-button.svg">';
    }
}