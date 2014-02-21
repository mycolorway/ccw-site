(function() {
  var weixinInfo;

  $.getJSON("./info.json", function(data) {
    return $.each(data.members, function(i, m) {
      return $($('#tpl-member').html()).addClass(m.nickname).find('.name').text(m.name).next('.title').html(m.title).next('.location').text(m.location).parent().appendTo($('#members'));
    });
  });

  weixinInfo = $(".weixin-info");

  $(".footer .weixin").on("click", function(e) {
    e.preventDefault();
    if ($(document).width() < 768) {
      return weixinInfo.css({
        left: $(this).offset().left - 32
      }).fadeToggle();
    } else {
      return weixinInfo.fadeToggle();
    }
  });

  $(document).on("click", function(e) {
    if (weixinInfo.is(':visible') && !$(e.target).hasClass('weixin')) {
      return weixinInfo.fadeOut();
    }
  });

}).call(this);
