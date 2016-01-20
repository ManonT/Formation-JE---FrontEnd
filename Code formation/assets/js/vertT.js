var tabsFn = (function() {

  function init() {
    setHeight();
  }

  function setHeight() {
    var $tabPane = $('.tab-pane'),
        tabsHeight = $('.nav-pills').height();

    $tabPane.css({
      height: tabsHeight
    });
  }

  $(init);
})();
