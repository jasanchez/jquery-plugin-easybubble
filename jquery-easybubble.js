/*
	jQuery EasyBubble 2012 - v.1.1 
	Jose Antonio Sanchez @jasanchezru
	GitHub: https://github.com/jasanchez/jquery-plugin-easybubble
	
	This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    See http://www.gnu.org/licenses/ to read the complete GNU General 
	Public License.
	
*/

(function ($) {

    $.fn.extend({

        easyBubble: function (options) {

            var defaults = {
                padding: 20,
                innerHtml: "",
				width: 200,
                height: 'auto',
                align: 'left',
				marginleft: 20,
				margintop: -10
            }

            var options = $.extend(defaults, options);

            return this.each(function () {

                var o = options;

				var bubbleDiv = $("<div class='easyBubble-div'>");
				calculatePosition($(this),bubbleDiv);
			
                if (legacyBrowser()) {
                    if (o.align == 'right') {
                        $("<span class='easyBubble-tail-right-legacy'>&nbsp;</span>").appendTo(bubbleDiv);
                    } else {
                        $("<span class='easyBubble-tail-left-legacy'>&nbsp;</span>").appendTo(bubbleDiv);
                    }
                } else {
                    if (o.align == 'right') {
                        $("<span class='easyBubble-tail-right'>&nbsp;</span>").appendTo(bubbleDiv);
                    } else {
                        $("<span class='easyBubble-tail-left'>&nbsp;</span>").appendTo(bubbleDiv);
                    }
                }

                $("<div class='easyBubble-content'/>").html(o.innerHtml).appendTo(bubbleDiv);

                bubbleDiv.hide();
                bubbleDiv.insertAfter($(this));

                $(this).hover(function (event) {
					if	($(bubbleDiv).is(':visible')){
						$(bubbleDiv).hide();
					}
					calculatePosition($(this),$(bubbleDiv));
                    $(bubbleDiv).fadeIn();
                }, function (event) {				
					if	($(bubbleDiv).is(':visible')){					
						calculatePosition($(this),$(bubbleDiv));
						$(bubbleDiv).fadeOut();		
					}else{					
						$(bubbleDiv).stop();
						$(bubbleDiv).hide();
					}
                });
            });

			function calculatePosition(parent, object){			
				var o = options;
				var left,top;
				
				if (typeof(o.left) === "undefined") {
					if (o.align == 'right') {
						left = parent.offset().left -  o.width -  o.marginleft;
					}else{
						left =parent.offset().left +  parent.width() + o.marginleft;
					}
				}else{
					left = parent.offset().left + o.left;
				}
				
				if(typeof(o.top) === "undefined"){
					top = parent.offset().top + o.margintop;
				}else{
					top = parent.offset().top + o.top + o.margintop;
				}
							
				object.css({ margin: 0, width: o.width, height: o.height, top: top, left: left });			
			}
			
            function legacyBrowser() {
                var ua = $.browser;
                if (ua.msie && ua.version.slice(0, 1) == "8") {
                    return true;
                } else if (ua.msie && ua.version.slice(0, 1) == "7") {
                    return true;
                } else {
                    return false;
                }
            }

        }
    });


})(jQuery);