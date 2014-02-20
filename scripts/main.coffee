if $('#page-team').length
  $.getJSON "../info.json", (data) ->
    $.each data.members, (i, member) ->
      $('<li class="' + member.nickname + ' member">
        <i class="avatar"></i>
        <p class="name">' + member.name + '</p>
        <p class="title">' + member.title + '</p>
        <p class="location">' + member.location + '</p>
      </li>').appendTo($('#members'))

weixinInfo = $(".weixin-info")
$(".footer .weixin").on "click", (e) ->
  e.preventDefault()
  if $(document).width() < 768
    weixinInfo.css({ left: $(this).offset().left - 32 })
      .fadeToggle()
  else
    weixinInfo.fadeToggle()

$(document).on "click", (e) ->
  if weixinInfo.is(':visible') && !$(e.target).hasClass('weixin')
    weixinInfo.fadeOut()

