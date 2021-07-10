
const num = document.querySelector(".number")
const card_area = document.querySelector(".card-area")

const image_url = 'https://image.tmdb.org/t/p/w1280'

const trending = async () => {
	let res = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=7d01ce9433d80be3efed5507c5508810")
	let data = await res.json()
	console.log(data)
	show_movies(data.results)


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

                        <div class="stars-outer">
			<div class="stars-inner"></div>
			</div>

                        </div>


                    <div class="tag">
                        <button type="text" class="btn">Drama</button>

                        <button type="text" class="btn">Romance</button>
                    </div>
                    </div>



                </div>
		
		`

		card_area.appendChild(card_movie)

	})
}


trending()