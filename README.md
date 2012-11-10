# jquery EasyBubble Plugin - Create crossbrowser css bubbles
========================

Compatible with IE7+, Chrome, FF

## Getting started

Include jQuery, jQuery EasyBubble Plugin and stylesheet:

```
  	<link rel="Stylesheet" type="text/css" href="jquery-easybubble.css" />
	<script type="text/javascript" src="jquery-1.8.2.min.js"></script>
	<script type="text/javascript" src="jquery-easybubble.min.js"></script>
```

Now, just bind the bubbles to any jquery object: 
```
	$('.box2').easyBubble({
		innerHtml: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
	});
```
or to set you bubble at the left side: 

```
	$('.box2').easyBubble({
		innerHtml: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		align: 'right'
	});
```

You can also override some optional values like:

* width: Width of the bubble content
* height: height of the bubble content
* top: relative top, you can use negative values
* left: relative left, you can use negative values* 

## IE7 and IE8 support

In this case, you also need to copy the following files to the css folder:

* PIE.htc
* toolTip-left.png
* toolTip-right.png

Unfortunately IE7&IE8 does not support shadows with CSS, so tail image can't be more fancy than that :(

## License

Copyright (c) 2012 Jose Antonio Sanchez Licensed under the GNU General Public License v3.