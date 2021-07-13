
const num = document.querySelector(".number")
const card_area = document.querySelector(".card-area")

const image_url = 'https://image.tmdb.org/t/p/w1280'


let urls = ["https://api.themoviedb.org/3/trending/movie/week?api_key=7d01ce9433d80be3efed5507c5508810", "https://api.themoviedb.org/3/genre/movie/list?api_key=7d01ce9433d80be3efed5507c5508810&language=en-US"]





const trending = async () => {

    let res = await fetch(urls[0])
    let data = await res.json()
    console.log(data)

    show_movies(data.results)
    get_rating()

}

const tag = async ()=>{
    let res = await fetch(urls[1])
    let data = await res.json()
    // console.log(data.genres)
    show_tag(data.genres)
}



const show_movies = (movie) => {

    card_area.innerHTML = ``
    movie.forEach(mov => {
        const { title, poster_path, vote_average, release_date } = mov

        card_movie = document.createElement('div')
        card_movie.classList.add('card')

        card_movie.innerHTML = `

                <div class="p-2 number">1</div>
                <div class="img-container">
		
                <img
                    src="${image_url}${poster_path}"
                    alt="">
		</div>
                <div class="text p-1 ">
                    <h3>${title}</h3>
                    <div class="star-area">

                        <p class="rel">${release_date}</p>

                
                        <span class="stars-outer">
			<div class="stars-inner">
            </div>

			</span>
            <div class="voter">${vote_average}</div>

                        </div>


                    <div class="tag">
                        <button type="text" class="btn">Drama</button>

                    </div>
                    </div>



                </div>
		
		`

        card_area.appendChild(card_movie)

    })
}

const show_tag = async(tags)=>{
    const tag = document.querySelectorAll(".btn")
    tags.forEach(eachres=>{
        console.log(eachres)
    })


    for (let i=0; i<=tag.length;i++){
        tag[i].innerHTML = tags[i].name
    }
}




const get_rating = () => {
    const rating_total = 10

    let vote_all = document.querySelectorAll(".voter")



    vote_all.forEach(eachvote=>{

    // // get percentage
    const star_percentage = (Number(eachvote.textContent) / rating_total) * 100

    // //rounded to 10 decimal
    const star_percentage_rounded = `${Math.round(star_percentage / 10) * 10}%`



    //set width of stars inner to percentage

    let a = document.querySelectorAll(".stars-inner")

    a.forEach((list) => {
        list.style.width = star_percentage_rounded
        // console.log(star_percentage_rounded)
    })

    })


}

const run = async()=>{
    await Promise.all([trending(),tag()])
}


run()