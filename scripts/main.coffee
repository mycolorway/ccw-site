(($) ->

  shadow = $("#shadow-circle")
  $(document).on "mouseover", "#page-team .earth .member", (e) ->
    shadow.css({
      opacity: 0.2,
      '-moz-transform': 'scale(1)',
      '-webkit-transform': 'scale(1)',
      'transform': 'scale(1)',
      top: $(this).position().top + $(this).height()/2 - 80,
      left: $(this).position().left + $(this).width()/2 - 80
    })
    $(this).next('.member-info').fadeIn(500)

  .on "mouseout", "#page-team .earth .member", (e) ->
    shadow.css({
      opacity: 0.8,
      '-moz-transform': 'scale(0.4)',
      '-webkit-transform': 'scale(0.4)',
      'transform': 'scale(0.4)'
    })
    $(this).next('.member-info').fadeOut(500)


) jQuery
