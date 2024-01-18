console.log("Welcome to Spotify...");
let audioElement = new Audio('/songs/1.mp3')
let songIndex=0;
let columnsIndex=0;
let gif = document.getElementById('gif');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let previous = document.getElementById('previous');
let next = document.getElementById('next');
let masterSongName =document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItems'));
let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'));
//playlists
let playlistItemPlay = Array.from(document.getElementsByClassName('playlistItemPlay'));
let columns = Array.from( document.getElementsByClassName('columns'));
let playlistCover = Array.from(document.getElementsByClassName('playlistCover'));
let playlistSongs = Array.from(document.getElementsByClassName('playlistSongs'));

songs=[
{songName:"Let me love you", filePath:"songs/1.mp3",SongCovers:"covers/1.jpg"},
{songName:"Let you", filePath:"songs/2.mp3",SongCovers:"covers/2.jpg"},
{songName:"Blank Space", filePath:"songs/3.mp3",SongCovers:"covers/3.jpg"},
{songName:"Cheap thrills", filePath:"songs/4.mp3",SongCovers:"covers/4.jpg"},
{songName:"lover-Taylor Swift", filePath:"songs/5.mp3",SongCovers:"covers/5.jpg"},
{songName:"Lover-Diljit", filePath:"songs/6.mp3",SongCovers:"covers/6.jpg"},
{songName:"Pehla pyar", filePath:"songs/7.mp3",SongCovers:"covers/7.jpg"},
{songName:"Bekhayali", filePath:"songs/8.mp3",SongCovers:"covers/8.jpg"},
{songName:"Tujhe kitna chahne lage", filePath:"songs/9.mp3",SongCovers:"covers/9.jpg"},
{songName:"Tujhe kitna chahne lage", filePath:"songs/9.mp3",SongCovers:"covers/10.jpg"},
];

playlists =[
{playlistName:"Let me love you", filePath:"songs/1.mp3",SongCover:"covers/1.jpg"},
{playlistName:"Let you", filePath:"songs/2.mp3",SongCover:"covers/2.jpg"},
{playlistName:"Blank Space", filePath:"songs/3.mp3",SongCover:"covers/3.jpg"},
{playlistName:"Cheap thrills", filePath:"songs/4.mp3",SongCover:"covers/4.jpg"},
{playlistName:"lover-Taylor Swift", filePath:"songs/5.mp3",SongCover:"covers/5.jpg"},

{playlistName:"Lover-Diljit", filePath:"songs/6.mp3",SongCover:"covers/6.jpg"},
{playlistName:"Pehla pyar", filePath:"songs/7.mp3",SongCover:"covers/7.jpg"},
{playlistName:"Bekhayali", filePath:"songs/8.mp3",SongCover:"covers/8.jpg"},
{playlistName:"Tujhe kitna chahne lage", filePath:"songs/9.mp3",SongCover:"covers/9.jpg"},
{playlistName:"Tujhe kitna chahne lage", filePath:"songs/10.mp3",SongCover:"covers/10.jpg"},

// {playlistName:"Cheap thrills", filePath:"songs/1.mp3",SongCover:"covers/4.jpg"},
// {playlistName:"Let me love you", filePath:"songs/3.mp3",SongCover:"covers/1.jpg"},
// {playlistName:"Let you", filePath:"songs/5.mp3",SongCover:"covers/2.jpg"},
// {playlistName:"Blank Space", filePath:"songs/9.mp3",SongCover:"covers/3.jpg"},
// {playlistName:"lover-Taylor Swift", filePath:"songs/2.mp3",SongCover:"covers/5.jpg"},

// {playlistName:"Cheap thrills", filePath:"songs/1.mp3",SongCover:"covers/3.jpg"},
// {playlistName:"Let me love you", filePath:"songs/5.mp3",SongCover:"covers/4.jpg"},
// {playlistName:"Let you", filePath:"songs/8.mp3",SongCover:"covers/1.jpg"},
// {playlistName:"Let me love you", filePath:"songs/6.mp3",SongCover:"covers/1.jpg"},
// {playlistName:"Let you", filePath:"songs/2.mp3",SongCover:"covers/2.jpg"},

// {playlistName:"Let me love you", filePath:"songs/1.mp3",SongCover:"covers/1.jpg"},
// {playlistName:"Let you", filePath:"songs/2.mp3",SongCover:"covers/2.jpg"},
// {playlistName:"Blank Space", filePath:"songs/3.mp3",SongCover:"covers/3.jpg"},
// {playlistName:"Cheap thrills", filePath:"songs/4.mp3",SongCover:"covers/4.jpg"},
// {playlistName:"lover-Taylor Swift", filePath:"songs/5.mp3",SongCover:"covers/5.jpg"},

// {playlistName:"Cheap thrills", filePath:"songs/1.mp3",SongCover:"covers/4.jpg"},
// {playlistName:"Let me love you", filePath:"songs/5.mp3",SongCover:"covers/1.jpg"},
// {playlistName:"Let you", filePath:"songs/2.mp3",SongCover:"covers/2.jpg"},
// {playlistName:"Let me love you", filePath:"songs/1.mp3",SongCover:"covers/1.jpg"},
// {playlistName:"Let you", filePath:"songs/2.mp3",SongCover:"covers/2.jpg"},

// {playlistName:"Lover-Diljit", filePath:"songs/6.mp3",SongCover:"covers/6.jpg"},
// {playlistName:"Pehla pyar", filePath:"songs/3.mp3",SongCover:"covers/7.jpg"},
// {playlistName:"Bekhayali", filePath:"songs/1.mp3",SongCover:"covers/8.jpg"},
// {playlistName:"Tujhe kitna chahne lage", filePath:"songs/6.mp3",SongCover:"covers/9.jpg"},
// {playlistName:"Tujhe kitna chahne lage", filePath:"songs/5.mp3",SongCover:"covers/10.jpg"},

// {playlistName:"Let you", filePath:"songs/2.mp3",SongCover:"covers/2.jpg"},
// {playlistName:"Lover-Diljit", filePath:"songs/6.mp3",SongCover:"covers/6.jpg"},
// {playlistName:"Bekhayali", filePath:"songs/1.mp3",SongCover:"covers/8.jpg"},
// {playlistName:"hum tere bin", filePath:"songs/5.mp3",SongCover:"covers/10.jpg"},
// {playlistName:"mere bina", filePath:"songs/3.mp3",SongCover:"covers/7.jpg"},

// {playlistName:"Cheap thrills", filePath:"songs/1.mp3",SongCover:"covers/3.jpg"},
// {playlistName:"Let me love you", filePath:"songs/5.mp3",SongCover:"covers/4.jpg"},
// {playlistName:"Let you", filePath:"songs/8.mp3",SongCover:"covers/1.jpg"},
// {playlistName:"Let me love you", filePath:"songs/6.mp3",SongCover:"covers/1.jpg"},
// {playlistName:"Let you", filePath:"songs/2.mp3",SongCover:"covers/2.jpg"},

// {playlistName:"Let me love you", filePath:"songs/1.mp3",SongCover:"covers/1.jpg"},
// {playlistName:"Let you", filePath:"songs/2.mp3",SongCover:"covers/2.jpg"},
// {playlistName:"Blank Space", filePath:"songs/3.mp3",SongCover:"covers/3.jpg"},
// {playlistName:"Cheap thrills", filePath:"songs/4.mp3",SongCover:"covers/4.jpg"},
// {playlistName:"lover-Taylor Swift", filePath:"songs/5.mp3",SongCover:"covers/5.jpg"},
// ];
];

platlistsImgsAndNames = [
    {playlistCoverName:"Let me love you", filePath:"songs/1.mp3",SongCoverImg:"covers/1.jpg"},
    {playlistCoverName:"Let you", filePath:"songs/2.mp3",SongCoverImg:"covers/2.jpg"},
    {playlistCoverName:"Blank Space", filePath:"songs/5.mp3",SongCoverImg:"covers/3.jpg"},
    {playlistCoverName:"Cheap thrills", filePath:"songs/7.mp3",SongCoverImg:"covers/4.jpg"},
    // {playlistName:"lover-Taylor Swift", filePath:"songs/6.mp3",SongCover:"covers/5.jpg"},
    // {playlistName:"Cheap thrills", filePath:"songs/9.mp3",SongCover:"covers/3.jpg"},
    // {playlistName:"Let me love you", filePath:"songs/10.mp3",SongCover:"covers/4.jpg"},
    // {playlistName:"Let you", filePath:"songs/8.mp3",SongCover:"covers/1.jpg"},
]

songItems.forEach((element,i) =>{
    element.getElementsByTagName("img")[0].src = songs[i].SongCovers;
    element.getElementsByTagName("img")[0].style.height='45px' ;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play-circle'); 
        gif.style.opacity = 0;
    }
})


audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays =()=>{
    songItemPlay.forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    }) 
}

const AllPlaysAndPause =()=>{
    playlistItemPlay.forEach((element) =>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

songItemPlay.forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        console.log(songIndex);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        //e.target.style.backgroundcolor = 'white';
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause'); 
        gif.style.opacity = 1;

    })
})

next.addEventListener(('click'), () =>{
    if(songIndex>=40){
        songIndex = 0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause'); 
    gif.style.opacity = 1;
        //songItems.style.backgroundcolor = 'white';

})

previous.addEventListener(('click'), () =>{
    if(songIndex<=0){
        songIndex =0;
    }
    else{
        songIndex -=1 ;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause'); 
    gif.style.opacity = 1; 

})



playlistCover.forEach((element,i) =>{
    element.getElementsByTagName("img")[0].src = platlistsImgsAndNames[i].SongCoverImg;
    element.getElementsByClassName("singerName")[0].innerText = platlistsImgsAndNames[i].playlistCoverName;
    element.addEventListener('click', (e)=>{
        columns.forEach((element,i) =>{
            
            element.getElementsByClassName("songName")[0].innerText = playlists[i].playlistName;
            element.getElementsByTagName("img")[0].src = playlists[i].SongCover;
            element.getElementsByTagName("img")[0].style.height = '45px';
            element.getElementsByTagName("img")[0].style.width = '45px';
        })
        // if(element.getElementsByClassName("singerName")[0].style.display ="block"){
        //     if(element.getElementsByTagName("img")[0].style.display ="block"){
        //         if(element.getElementsByClassName("playlistItemPlay")[0].style.display = "block"){
        //             element.getElementsByTagName("img")[0].style.display ="none";
        //             element.getElementsByClassName("singerName")[0].style.display ="none";
        //             element.getElementsByName("playlistItemPlay")[0].style.display="none";
        //         }
                

        //     }
        // }
        //     else{
        //         element.getElementsByClassName("singerName")[0].style.display ="block";
        //     }        
       
    })
})

playlistItemPlay.forEach((element)=>{
    element.addEventListener('click', (e)=>{
        AllPlaysAndPause();
        songIndex = parseInt(e.target.id);
        console.log(songIndex);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        masterSongName.innerText = playlists[songIndex].playlistName;
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause'); 
        gif.style.opacity = 1;

        // if(audioElement.paused || audioElement<=0){
        //     audioElement.play();
        //     e.target.classList.remove('fa-play-circle');
        //     e.target.classList.add('fa-pause-circle');
        //     gif.style.opacity = 1;
        // }
        // if (audioElement.pause()){
        //     audioElement.play();
        //     e.target.classList.remove('fa-play-circle');
        //     e.target.classList.add('fa-pause-circle'); 
        //     gif.style.opacity = 0;
        // }

    })
})



// playlistItemPlay.forEach((element)=>{
//     element.addEventListener('click', ()=>{
//         if(audioElement.paused || audioElement<=0){
//             audioElement.play();
//             e.target.classList.remove('fa-play-circle');
//             e.target.classList.add('fa-pause-circle');
//             gif.style.opacity = 1;
//         }
//         else{
//             audioElement.pause();
//             e.target.classList.remove('fa-pause-circle');
//             e.target.classList.add('fa-play-circle'); 
//             gif.style.opacity = 0;
//         }
//     })
// })
