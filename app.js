// const current_song_name=document.querySelector('.current-song-name')
const current_playing=document.querySelector('.current-song')
let Song_id=null
let address=null



const play=(current_song)=>{
    
    
    current_playing.innerHTML=''
    let name=current_song.previousElementSibling.innerHTML;
    console.log(name)
    
    window.scrollTo(10000,10000);

    let addr=''
    
    let songId=current_song.getAttribute("data-songId")
    Song_id=songId
    switch(songId){
        case '0':{
            addr='./songs/1.mp3'
        }
        break
        case '1':{
            addr='./songs/2.mp3'
        }
        break
        case '2':{
            addr='./songs/3.mp3'
        }
        break
        case '3':{
            addr='./songs/4.mp3'
        }
        break
        case '4':{
            addr='./songs/5.mp3'
        }
        break
        case '5':{
            addr='./songs/6.mp3'
        }
        break
        case '6':{
            addr='./songs/7.mp3'
        }
        break
        case '7':{
            addr='./songs/8.mp3'
        }
        break
        case '8':{
            addr='./songs/9.mp3'
        }
        break
        case '9':{
            addr='./songs/10.mp3'
        }
        break

        


    }
    address=addr
    let x=`
    <div class="current-song-name">${name}</div>
    
    <audio controls>
  <source src="${addr}" type="audio/mpeg">

  Your browser doesn't support HTML5 audio. Here is
     
</audio>
<div class="song-btns">
<i id="previous-song" onclick="previous_song()" class="fas fa-backward"></i>
<i id="next-song" onclick="next_song()" class="fas fa-forward"></i>
</div>



    `
    current_playing.innerHTML=x
}



function previous_song(){
    Song_id=parseInt(Song_id)
    console.log(Song_id)
    
    
}


