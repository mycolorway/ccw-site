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

) jQuery
