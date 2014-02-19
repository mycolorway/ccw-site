(function() {
  var template, weixinInfo;

  template = function(id, data) {
    var target;
    target = $.trim($("#" + id).html());
    if (data) {
      $.each(data, function(key, value) {
        var re;
        re = new RegExp("\\{\\{ " + key + " \\}\\}", "g");
        return target = target.replace(re, value);
      });
    }
    return $(target);
  };

  $.getJSON("../info.json", function(data) {
    return $.each(data.members, function(i, member) {
      return template('tpl-member', member).appendTo($('#members'));
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
