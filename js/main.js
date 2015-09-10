$(window).load(function() {
	$(window).scrollTop(0);

	$(window).resize(function() {
		// shouldn't we just avoid having
		$('#nav ul.links li, #nav ul.social').removeAttr('style');
	});
});

var toggleNav = function(DOMObject, isOpen) {
  if (isOpen) {
    $('#nav ul.links li, #nav ul.social').hide();

		DOMObject.click(function() {
      toggleNav(this, false);
    }.bind(this));
  }

	else {
  	$('#nav ul.links li, #nav ul.social').css('display', 'block');
    DOMObject.click(function() {
      toggleNav(this, true);
    }.bind(this));
	}
};
