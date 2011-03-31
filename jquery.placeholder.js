/*!
 * jQuery Placeholder
 *
 * @version 0.9
 * @author mach3
 * @requires jQuery 1.4.x or later
 */
(function( $, window, document, undefined ){
	$.fn.extend({
		/**
		 * Display a guide text for input element just as the placeholder attribute on HTML5 does.
		 * @param {Object|String} config Configuration object or class name string for displaying defualt value.
		 * @return {Object} jQuery object.
		 * @example 
		 * $("input.foo").placeholder({ defaultClass : "myclass" });
		 * $("input.bar").placeholder( "myclass" );
		 */
		placeholder : function( config ){
			config = String( typeof( config ) ).toLowerCase() === "string" ?
				{ defaultClass : config } : config ;
			var option = $.extend(
				{
					defaultClass : "jquery-placeholder",
					resetOnSubmit : false
				},
				config
			);
			this.each( function( i, ele ){
				var input, handler;
				input = $(this);
				handler = {
					blur : function(){
						var o = $(this);
						if( o.attr("value") !== "" ) return;
						o.addClass( option.defaultClass ).attr("value", o.data("placeholder") );
					},
					focus : function(){
						var o = $(this);
						if( o.attr("value") !== o.data("placeholder") ) return;
						o.attr("value","").removeClass( option.defaultClass );
					}
				};
				input.bind( handler );
				if( option.resetOnSubmit ){
					input.parents("form").bind("submit",function(){
						if( input.attr("value") === input.data("placeholder") ){
							input.attr("value","");
						}
					});
				}
				handler.focus.apply( this );
				handler.blur.apply( this );
			});
			return this;
		}
	});

})( jQuery, window, document, undefined );
