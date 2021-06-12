$('#currentDay').text(moment().format('dddd, MMMM Do'))

$('.saveBtn').on('click', function () {
   var time = $(this).parent().attr('id')
   var input = $(this).siblings('.description').val()
   localStorage.setItem(time, input)
})

$('#hour-9 .description').val(localStorage.getItem('hour-9'))
$('#hour-10 .description').val(localStorage.getItem('hour-10'))
$('#hour-11 .description').val(localStorage.getItem('hour-11'))
$('#hour-12 .description').val(localStorage.getItem('hour-12'))
$('#hour-13 .description').val(localStorage.getItem('hour-13'))
$('#hour-14 .description').val(localStorage.getItem('hour-14'))
$('#hour-15 .description').val(localStorage.getItem('hour-15'))
$('#hour-16 .description').val(localStorage.getItem('hour-16'))
$('#hour-17 .description').val(localStorage.getItem('hour-17'))

function hourCheck () {
   var currentTime = moment().hours()
   $('.time-block').each(function () {
      var compareTime = parseInt($(this).attr('id').split('-')[1])
      if (currentTime === compareTime) {
         $(this).addClass('present')
      } else if (compareTime < currentTime) {
         $(this).removeClass('present')
         $(this).addClass('past')
      } else {
         $(this).removeClass('present')
         $(this).removeClass('past')
         $(this).addClass('future')
      }
   })
}

hourCheck();