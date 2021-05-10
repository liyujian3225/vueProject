(function() {
	var obj = {
		width: 0,
		height: 0,
		xScale: 0,
		yScale: 0
	};

	function setSize() {
		obj.width = window.innerWidth;
		obj.height = window.innerHeight;
		obj.xScale = obj.width / 1920;
		obj.yScale = obj.height / 1080;
        obj.minScale = Math.min(obj.xScale,obj.yScale);
//      obj.xScale =  obj.minScale;
//      obj.yScale =  obj.minScale;
		var jscss = [
			'body {',
			'   transform: translate(' + (-50 * (1 - obj.xScale)) + '%,' + (-50 * (1 - obj.yScale)) + '%) scale(' + obj.minScale + ',' + obj.minScale + ');',
			'   -webkit-transform: translate(' + (-50 * (1 - obj.xScale)) + '%,' + (-50 * (1 - obj.yScale)) + '%) scale(' + obj.minScale + ',' + obj.minScale + ');',
			'}'
		].join('\n');

		var $style = $('#js-style');
		if ($style.length === 0) {
			$style = $('<style id="js-style" type="text/css"></style>');
			$style.appendTo('head');
		}
		$style.text(jscss);
	}
	setSize();
	window.addEventListener('resize', setSize, false);
	return obj;
})();