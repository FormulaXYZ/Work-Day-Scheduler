//var date = moment().format('l');

$('#currentDay').text(moment().format('l'));

// to save: localStorage.setItem('key', 'value')
// to retrieve: localStorage.getItem('key')

$(".saveBtn").on("click", function() {
    // Get a key
    var key = $(this).parent().attr("id")
    // Get your text to save/
    var text = $(this).siblings("textarea").val()

    //set to local storage
    localStorage.setItem(key,text)
})

console.log(localStorage.getItem('hour9'))
$('#hour9 textarea').val((localStorage.getItem('hour9')))

console.log(localStorage.getItem('hour9'))
$('#hour10 textarea').val((localStorage.getItem('hour10')))

console.log(localStorage.getItem('hour9'))
$('#hour11 textarea').val((localStorage.getItem('hour11')))

console.log(localStorage.getItem('hour9'))
$('#hour12 textarea').val((localStorage.getItem('hour12')))

console.log(localStorage.getItem('hour9'))
$('#hour13 textarea').val((localStorage.getItem('hour13')))

console.log(localStorage.getItem('hour9'))
$('#hour14 textarea').val((localStorage.getItem('hour14')))

console.log(localStorage.getItem('hour9'))
$('#hour15 textarea').val((localStorage.getItem('hour15')))

console.log(localStorage.getItem('hour9'))
$('#hour16 textarea').val((localStorage.getItem('hour16')))

console.log(localStorage.getItem('hour9'))
$('#hour17 textarea').val((localStorage.getItem('hour17')))




// Grab hour from moment




var currentHour =  moment().hour();


//compare the hour of the day to hour of the row

// bassed on comparison add the class past, present, or future