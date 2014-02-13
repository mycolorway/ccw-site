(($) ->

  window.mcw = template: (id, data) ->
    template = $.trim($("#" + id).html())
    if data
      $.each data, (key, value) ->
        re = new RegExp("\\{\\{ " + key + " \\}\\}", "g")
        template = template.replace(re, value)
        return

    return $ template

  $.getJSON "/info.json", (data) ->
    $.each data.members, (i, member) ->
      mcw.template('tpl-member', member)
        .appendTo($('#members'))

) jQuery
