var Navigator = (function (Context) {
	function Navigator()
	{
		this.current = "";
		this.previous = "";
	}

	Navigator.prototype.forward = function(viewName) {
		// body...
		this.previous = this.current;
		this.current = viewName;
	};

	return Navigator;
}) ();