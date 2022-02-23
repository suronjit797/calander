// global
const dt = new Date()

function loadDate() {

    // date function 
    dt.setDate(1)
const monthStartingDay = dt.getDay()
const monthEnded = new Date(dt.getFullYear(), dt.getMonth() + 1, 0)


// number to month by array
let monthList = [
    "january", "February", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"
]
    // set header month and date
    document.getElementById('month_name').innerText = monthList[dt.getMonth()]
    document.getElementById('date_str').innerText = dt.toDateString()
    let date = ''
    // loop for previous dates
    for (let i = monthStartingDay; i > 0; i--) {
        date += `<div class="previous"> ${(new Date(dt.getFullYear(), dt.getMonth(), 0).getDate()) - i + 1} </div>`

    }
    // loop for date
    for (let i = 1; i <= monthEnded.getDate(); i++) {
        date += `<div> ${i} </div>`
    }
    document.getElementById('days').innerHTML = date
}

function changeMonth(direction) {
    if (direction == 'prev') {
        dt.setMonth(dt.getMonth() - 1)
    } else if (direction == 'next') {
        dt.setMonth(dt.getMonth() + 1)
    }
    loadDate()
}



// night mode
document.getElementById('switch').addEventListener('click', function (event) {
    if (!event.target.checked) {
        document.body.classList.add('night')
    } else {
        document.body.classList.remove('night')
    }
})