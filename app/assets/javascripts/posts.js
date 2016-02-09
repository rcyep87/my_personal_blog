$('#submit-msg').on('click', function () {
  $.ajax({
    url: '/posts',
    dataType: 'JSON',
    method: "POST",
    data: {
      message: {
        name: $('#message_msg').val(),
        body: $('#message_room_id').val(),
      }
    },
    success: function (response) {
      $('#message_msg').val('');
      // $('#notice').prepend('<h3>Message Posted!</h3>');
      $('.messages ul').append('<li>' + response.msg + '</li>');
    }
  });
});
