let masterPlay = document.querySelector('#masterPlay');
let gif = document.querySelector('.gif');
const audioSong = new Audio('songs/1.mp3');
let myProgressBar = document.getElementById("myProgressBar");
let songItems = document.querySelectorAll('.songItem');
let songIndex = 0;
let songs = document.getElementsByClassName('songItemPlay');

let songNames = [
    {songName:"Kiya Baat He", filepath: "songs/1.mp3", coverpath: "covers/1.jpg"},
    {songName:"Chand Sifarish", filepath: "songs/2.mp3", coverpath: "covers/2.jpg"},
    {songName:"Kahani Suno 2.0", filepath: "songs/3.mp3", coverpath: "covers/3.jpg"},
    {songName:"Kamal He", filepath: "songs/4.mp3", coverpath: "covers/4.jpg"},
    {songName:"Tera Mera Safar", filepath: "songs/5.mp3", coverpath: "covers/5.jpg"},
    {songName:"Hamnava Mere", filepath: "songs/6.mp3", coverpath: "covers/6.jpg"},
    {songName:"Sunn Le Zra", filepath: "songs/7.mp3", coverpath: "covers/7.jpg"},
    {songName:"Jedha Nasha", filepath: "songs/8.mp3", coverpath: "covers/8.jpg"},
    {songName:"O Asman Wale", filepath: "songs/9.mp3", coverpath: "covers/9.jpg"},
    {songName:"LUT GAYE", filepath: "songs/10.mp3", coverpath: "covers/10.jpg"},
]


songItems.forEach((element)=>{

});

masterPlay.addEventListener("click", ()=>{
    if( audioSong.paused || audioSong.curentTime<=0){
        audioSong.play();
        gif.style.opacity = "1";
        masterPlay.src = "images/pause.png"
    }
    else{
        audioSong.pause();
        gif.style.opacity = "0";
        masterPlay.src = "images/play.png"
    }
});

audioSong.addEventListener('timeupdate', ()=>{
     let progress = parseInt((audioSong.currentTime/audioSong.duration) * 100);
     myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", ()=>{
     audioSong.currentTime = (myProgressBar.value * audioSong.duration)/100;
});

function makeAllPlays(){
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{ 
      element.src = "images/pause.png";
      element.src = "images/play.png";
    });
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.style.cursor = "pointer";
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        let name = document.querySelector('.name');
        e.target.src = "images/pause.png";
        songIndex = parseInt(e.target.id);
        audioSong.currentTime = 0;
        audioSong.src = `songs/${songIndex+1}.mp3`;
        audioSong.play();
        masterPlay.src = "images/pause.png";
        gif.style.opacity = "1";
        name.textContent = songNames[songIndex].songName;
     });
});


document.getElementById('previous').addEventListener('click',()=>{
    let name = document.querySelector('.name');
    if(songIndex<0){
        songIndex= 0;
    }
    else{
        songIndex --;
    }
    makeAllPlays();
    songs[songIndex].src = "images/pause.png";
    audioSong.currentTime = 0;
    audioSong.src = `songs/${songIndex+1}.mp3`;
    audioSong.play();
    masterPlay.src = "images/pause.png";
    gif.style.opacity = "1";
    name.textContent = songNames[songIndex].songName;
});


document.getElementById('next').addEventListener('click',()=>{
    let name = document.querySelector('.name');
    if(songIndex>10){
        songIndex= 0;
    }
    else{
        songIndex ++;
    }
    makeAllPlays();
    songs[songIndex].src = "images/pause.png";
    audioSong.currentTime = 0;
    audioSong.src = `songs/${songIndex+1}.mp3`;
    audioSong.play();
    masterPlay.src = "images/pause.png";
    gif.style.opacity = "1";
    name.textContent = songNames[songIndex].songName;
});