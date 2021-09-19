


//im trying to use spotify api and only capable of get access token by fetch function but cant link to fetch get use that token

// var redirect_uri = "http://127.0.0.1:5500/8.musicplayer/index.html"

// var client_id = "6d0dffd9649944ce87f88062272574e2";
// var client_secret = "b95a877caa8c4881bf757ec9ae378625";

// const AUTHORIZE = "https://accounts.spotify.com/authorize"



// async function getToken() {


//         const result = await fetch('https://accounts.spotify.com/api/token', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded',
//                 'Authorization': 'Basic ' + btoa(`${client_id}:${client_secret}`)
//             },
//             body: 'grant_type=client_credentials'
//         });

//         const data = await result.json();
//     return console.log(data.access_token);



// }

// getToken()



//not working below function

// async function getMusic(token){

//     const result = await fetch("https://api.spotify.com/v1/artists", {
//         method: 'GET',
//         headers: { 'Authorization': 'Bearer ' + token }
//     })

//     const data = result.json()
//     return console.log(data)
// }



//since im not capable using spotify api at my current level understanding i  move to get simple music play and pause music


const audio = document.getElementById('aud')
const play = document.querySelector('.play')
const pause = document.querySelectorAll('.pause1')

play.addEventListener('click', () => {
    aud.play()
    play.style.display = "none"
    pause.forEach((pause) => { pause.style.display = "block" })
})




pause.forEach((pauseevey, idx) => {
    pauseevey.addEventListener('click', () => {
        aud.pause()
        play.style.display = "block"
        pauseevey.style.display = "none"
    })
})




