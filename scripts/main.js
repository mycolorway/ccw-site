(function() {
  (function($) {
    var template;
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
    return $.getJSON("/info.json", function(data) {
      return $.each(data.members, function(i, member) {
        return template('tpl-member', member).appendTo($('#members'));
      });
    });
  })(jQuery);

}).call(this);
