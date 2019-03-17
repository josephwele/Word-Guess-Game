//selecting the items
var displayDash= document.getElementById('dash');
var guessed = document.getElementById('guessed');
var remained = document.getElementById('remained');
var winDisplay=document.getElementById('winDisplay');
var audio= document.getElementById('Audio');
var songsTitle= document.getElementById('songTitle');
//declaring the variables
var guessedLetters=[];
var winCounter =0;
var change=[];
var countDown;
var randomSinger;
var splitRandomSinger;
var count;
var random;
//neccessary array sources
//list of singers
var arrSinger = ["beyonce","michael","celine","jennifer","ashanti"];
//list of singer's image source
var imgArr=['assets\\image\\img2.PNG','assets\\image\\img3.PNG',
'assets\\image\\img4.PNG','assets\\image\\img5.PNG','assets\\image\\img6.PNG'

]
// list of singer's sound music
var soundArr=['assets\\songs\\beyonce.mp3','assets\\songs\\michael.mp3','assets\\songs\\celine.mp3',
'assets\\songs\\ashanti.mp3','assets\\songs\\michael.mp3'

]
//list of singer's sound title
var songTitle=['I would rather go blind','beat it ','My heart will go on',
'foolish','michael again']

// loading of the page by calling the pageload function
pageLoad();

function pageLoad(){
    random=[Math.floor(Math.random()*arrSinger.length)];
     randomSinger= arrSinger[random];
    splitRandomSinger= randomSinger.split("");
//using for loop display the singer name by _ _ _ _
for(var i=0;i<splitRandomSinger.length;i++){
    change[i] = '_';
}
displayDash.textContent=change;
countDown=13;
remained.textContent=countDown;
guessed.textContent="";
count=splitRandomSinger.length;
guessedLetters=[]; 
}

document.addEventListener('keydown', pressKey);

function pressKey(e) {
    let event=e.key;
        if(guessedLetters.indexOf(event) ==-1) 
        { guessed.textContent += ` ${e.key}`;
             countDown--;
            remained.textContent=countDown;
            for(var i=0;i<splitRandomSinger.length;i++){
            if(splitRandomSinger[i]==event)
            { 
               change[i]=change[i].replace('_',event);
               displayDash.textContent=change;
               count--;
               

            }
            
        }
            guessedLetters+=event;
            if(count<=0){
                win();
            }
        if(countDown===0) pageLoad();

        }
}

function win(){
    winCounter++;
    winDisplay.textContent=winCounter;
    document.getElementById('img').src= imgArr[random];
    songsTitle.textContent=songTitle[random];
    audio.src=soundArr[random];
    audioPlay();
    pageLoad();
}

function audioPlay(){
    audio.play();
}