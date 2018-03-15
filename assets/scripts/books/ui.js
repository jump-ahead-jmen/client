

const onGetBooksSuccess = function (response) {
$('#message').text('Congrats You Got a Book!')
$('#message').css('background-color', 'green')
}

const onGetBooksFailure = function (error) {
  console.log(error)
  $('#message').text('Sorry Try Again!')
  $('#message').css('background-color', 'red')
}
