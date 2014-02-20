(function() {
  var weixinInfo;

  if ($('#page-team').length) {
    $.getJSON("../info.json", function(data) {
      return $.each(data.members, function(i, member) {
        return $('<li class="' + member.nickname + ' member">\
        <i class="avatar"></i>\
        <p class="name">' + member.name + '</p>\
        <p class="title">' + member.title + '</p>\
        <p class="location">' + member.location + '</p>\
      </li>').appendTo($('#members'));
      });
    });
  }

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
