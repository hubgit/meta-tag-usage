google.load('search', '1');

google.setOnLoadCallback(function(){
	var cse = '003954572918023580770:dhs-ewsnyrk';
	var form = document.querySelector('form');

	var args_safeSearch = google.search.Search.RESTRICT_SAFESEARCH;
	var args_resultSetSize = google.search.WebSearch.resultSetSize;

	var customSearchControl = new google.search.CustomSearchControl(cse, {
		webSearchOptions: {
			args_safeSearch: google.search.Search.SAFESEARCH_OFF,
			args_resultSetSize: google.search.Search.LARGE_RESULTSET
		}
	});

	var beforeSearch = function(control, searcher, query) {
		searcher.setQueryAddition('more:pagemap:metatags-' + form.tag.value);
	        searcher.setResultSetSize(20);
	};

	customSearchControl.setSearchStartingCallback(this, beforeSearch);
	customSearchControl.setLinkTarget('main');

	var options = new google.search.DrawOptions;
	options.enableSearchResultsOnly();
	customSearchControl.draw('items', options);

	form.addEventListener('submit', function(event) {
		event.preventDefault();
		customSearchControl.execute('*', 1);
	});
}, true);
