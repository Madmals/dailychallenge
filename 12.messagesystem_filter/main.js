const avatar = document.querySelector('.avatar')

const msg = document.querySelectorAll('.msg-con')

const contactName = document.querySelector('.contact-name')

const newest = document.querySelector(".new")

const first = document.querySelector("first")

const search = document.getElementById("search")

let listItem = []

search.addEventListener('input', (e) => {
    filterData(e.target.value)
})
async function getS() {
    try {
        let resp = await axios.get("https://randomuser.me/api/?results=10")
        let resp2 = await axios.get("https://type.fit/api/quotes")
        let data1 = resp.data.results


        // let birthday = new Date(1995, 11, 17)

        // console.log(birthday)



        let avat = data1[8].picture.medium

        avatar.style.backgroundImage = `url(${avat})`

        msg.forEach((eachmesg, idx) => {
            let nami = data1[idx].name.first
            let lastmi = data1[idx].name.last

            let quote = resp2.data[idx].text

            let messagetime = document.querySelectorAll('.message-time')

            newest.addEventListener('click', () => {
                let ab = []
               messagetime.forEach((eacha)=>{
                ab.push(eacha.innerHTML)
               })
               datenaksort =[]
               for (a of ab){
               let f =a.split("").slice(5,a.length).join("").split("-")
                // month is calculate starting 0 index 
               let month = f[1] - 1
               let datediff = new Date(f[2],month,f[0])
                datenaksort.push(datediff)
               }

            //    able to sort the date but not success to implement to dom 
               console.log(datenaksort.sort((a,b)=>{
                   return a-b
               }))
            })




            /* ------------------ trying to configure set time message ------------------ */
            // timess =[]
            let masa =
                // new Date().getTime() - 67200000

                // console.log(masa)

                new Date(new Date().getTime() + Math.random() * (new Date('2021-02-12T01:57:45.271Z').getTime() - new Date().getTime()));

            // kalau masa kurang ( milisecond dari tahun 1970 + total milisecond dalam sehari)
            let timeStamp = (time) => {
                // timess.push(time)
                let w = []
                // console.log(w)
                for (i = 1; i < 24; i++) {
                    w.push((86400000 / 24) * i)
                }
                    for (i=1; i<w.length; i++){
                if (time < (new Date().getTime() - 86400000)) {
                    let f = time.getMinutes()
                    if (f < 10) {
                        f = `0${f}`

                        return `${time.getHours()}:${f} ${time.getDate()}`
                    } else {
                        return `${time.getHours()}:${f} ${time.getDate()}-${time.getMonth()}-${time.getFullYear()}`

                    }

                    //need to check not functioning for under 24 hours
                } else if (time <= new Date().getTime() - w[i]){
                    return `${24 - (i)} hours ago`
                } else if (time >= new Date().getTime() - w[0]){
                    return '1 hours ago'
                }
            }
            
            }

            listItem.push(eachmesg)


            eachmesg.innerHTML = `
                    <div class="left-message">

                        <img src="${data1[idx].picture.medium}" alt="">
                        <i class="fas fa-heart "></i>
                    </div>
                    <div class="right-message">
                        <div class="name-area">
                            <div class="contact-name">${nami} ${lastmi}</div>
                            <div class="message-time">${timeStamp(masa)}</div>
                        </div>
                        <div class="topic">New Portfolio</div>
                        <p>${quote}</p>
                    </div>`


        })

        

        const love = document.querySelectorAll('.fas')

        love.forEach(eachlove => {
            eachlove.addEventListener('click', (e) => {
                let d = e.target.classList
                if (d.contains('fa-heart')) {
                    d.toggle('love-red')
                }

            })

        })


        

    }
    catch (err) {
        console.log(err)
    }
}



function filterData(searchTerm) {
    listItem.forEach(item => {
        if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}
getS()

