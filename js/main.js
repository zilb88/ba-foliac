

; (function () {
    // add isotope
	$('.portfolio-examp').isotope({
	});

	var filters = [];
	$('.portfolio-navi').on('click', 'a', function(event) {
		event.preventDefault();
		$(this).toggleClass('active');
		var isChecked = $(this).hasClass('active');
		var filter = $(this).attr('data-filter');
		if (isChecked) {
			addFilter(filter);
		} else {
			removeFilter(filter);
		}

		console.log(filters);
		$('.portfolio-examp').isotope({
			filter: filters.join(',')
		});
	});
	function addFilter( filter ) {
	  if ( filters.indexOf( filter ) == -1 ) {
		filters.push( filter );
		filters.join(',')
	  }
	}
	function removeFilter( filter ) {
	  var index = filters.indexOf( filter);
	  if ( index != -1 ) {
		filters.splice( index, 1 );
		console.log(filters.join(','));
	  }
	}



	$('form').on('submit', function(event){
		event.preventDefault();
		// let span = $('<span>Oshibka</span>');
		
			let symbol = $('#name').val();
			let newSymbol = symbol.toLowerCase();
			if (symbol != newSymbol ){
				alert('Oshibka');
				return true;
			}
			else{
				alert('Ok');
				return false;
			}

	});
})();
