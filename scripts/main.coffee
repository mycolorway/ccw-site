(($) ->

  template = (id, data) ->
    target = $.trim($("#" + id).html())
    if data
      $.each data, (key, value) ->
        re = new RegExp("\\{\\{ " + key + " \\}\\}", "g")
        target = target.replace(re, value)

    return $ target

  $.getJSON "/info.json", (data) ->
    $.each data.members, (i, member) ->
      template('tpl-member', member)
        .appendTo($('#members'))

  $(".footer .weixin").on "click", (e) ->
    e.preventDefault()
    if $(document).width() < 768
      $(".weixin-info").css({ left: $(this).offset().left - 32 })
        .fadeToggle()
    else
      $(".weixin-info").fadeToggle()


) jQuery
