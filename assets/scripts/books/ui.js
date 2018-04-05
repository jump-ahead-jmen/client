
const onGetBooksSuccess = function (response) {
$('#message').html('Congrats You Got a Book!')
$('#message').css('background-color', 'green')
}

const onGetBooksFailure = function (error) {
  console.log(error)
  $('#message').html('Sorry Try Again!')
  $('#message').css('background-color', 'red')
}
