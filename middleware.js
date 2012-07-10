<script type="text/javascript">
function filterData(data){
	    // filter all the nasties out
	    // no body tags
	    data = data.replace(/<?\/body[^>]*>/g,'');
	    // no linebreaks
	    data = data.replace(/[\r|\n]+/g,'');
	    // no comments
	    data = data.replace(/<--[\S\s]*?-->/g,'');
	    // no noscript blocks
	    data = data.replace(/<noscript[^>]*>[\S\s]*?<\/noscript>/g,'');
	    // no script blocks
	    data = data.replace(/<script[^>]*>[\S\s]*?<\/script>/g,'');
	    // no self closing scripts
	    data = data.replace(/<script.*\/>/,'');
	    // [... add as needed ...]
		data = $("<div>").html(data).find(".redbox");
		
	    return data;
	  }
	  function filter(id){
			$(id).find("a").css({'color':'blue'});
		}
}
</script>
