$.getJSON "./info.json", (data) ->
  $.each data.members, (i, m) ->
    $($('#tpl-member').html())
      .addClass(m.nickname)
      .find('.name').text(m.name)
      .next('.title').html(m.title)    # 这里用 html() 因为有的 title 里写了标签
      .next('.location').text(m.location)
      .parent().appendTo($('#members'))
