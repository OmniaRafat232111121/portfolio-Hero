var progressBarOptions = {
	startAngle: -1.55,
	size: 75,
    value: 0.75,
    fill: {
		color: 'black'
	}
}

$('.mh-progress').circleProgress(progressBarOptions).on('circle-animation-progress', function(event, progress, stepValue) {
	$(this).find('strong').text(String(stepValue.toFixed(2)).substr(1));
});

$('#cr-1').circleProgress({
	value : 0.95,
	fill: {
		color: '#0bceaf'
	}
});

$('#cr-2').circleProgress({
	value : 0.8,
	fill: {
		color: '#0bceaf'
	}
});

$('#cr-3').circleProgress({
	value : 0.7,
	fill: {
		color: '#0bceaf'
	}
});

$('#cr-4').circleProgress({
	value : 0.65,
	fill: {
		color: '#0bceaf'
	}
});
