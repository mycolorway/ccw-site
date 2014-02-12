(($) ->

  shadow = $("#shadow-circle")
  $(document).on "mouseenter", "#page-team .earth .member", (e) ->
    shadow.css
      pop: '',
      opacity: 0,
      '-moz-transform': 'scale(1)',
      '-webkit-transform': 'scale(1)',
      'transform': 'scale(1)',
      top: $(this).position().top + $(this).height()/2 - 80,
      left: $(this).position().left + $(this).width()/2 - 80

    $('.member-info').stop(true, true)
    $(this).next('.member-info').delay(200).fadeIn(500)

  .on "mouseleave", "#page-team .earth .member", (e) ->
    shadow.attr('style', '')
    $('.member-info').stop(true, true)
    $(this).next('.member-info').fadeOut(300)


) jQuery
