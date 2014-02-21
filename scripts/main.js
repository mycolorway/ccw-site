(function() {
  $.getJSON("./info.json", function(data) {
    return $.each(data.members, function(i, m) {
      return $($('#tpl-member').html()).addClass(m.nickname).find('.name').text(m.name).next('.title').html(m.title).next('.location').text(m.location).parent().appendTo($('#members'));
    });
  });

}).call(this);
