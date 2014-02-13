(function() {
  (function($) {
    window.mcw = {
      template: function(id, data) {
        var template;
        template = $.trim($("#" + id).html());
        if (data) {
          $.each(data, function(key, value) {
            var re;
            re = new RegExp("\\{\\{ " + key + " \\}\\}", "g");
            template = template.replace(re, value);
          });
        }
        return $(template);
      }
    };
    return $.getJSON("/info.json", function(data) {
      return $.each(data.members, function(i, member) {
        return mcw.template('tpl-member', member).appendTo($('#members'));
      });
    });
  })(jQuery);

}).call(this);
