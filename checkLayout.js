if (!typeof jQuery == 'undefined' || window.jQuery) {
	$(document).ready(function() {
		function checkLayout() {
			function setLayoutXL() {
				// Run contents for xlarge screens
			}
			function setLayoutLG() {
				// Run contents for large screens
			}
			function setLayoutMD() {
				// Run contents for medium screens
			}
			function setLayoutSM() {
				// Run contents for small screens
			}
			function setLayoutXS() {
				//  Run contents for mobile screens
			}
			if ($('#check-xl').css("display") == "block") {
				setLayoutXL();
			}
			if ($('#check-lg').css("display") == "block") {
				setLayoutLG();
			}
			if ($('#check-md').css("display") == "block") {
				setLayoutMD();
			}
			if ($('#check-sm').css("display") == "block") {
				setLayoutSM();
			}
			if ($('#check-xs').css("display") == "block") {
				setLayoutXS();
			}
		}
		var resizeTimer;
		$(window).resize(function() {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(checkLayout, 150);
		});
	});
}