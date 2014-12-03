#Yet another feckin' grid system

It doesn't do anything any other grid system doesn't do. 

Based on a 1140px max width, it's a fluid responsive grid system. The idea of it is that it provides a number of different options to hopefully fit a wide variety of project types. It's essentially a mixed grid system, with a few different pattern types; 

## Features

* 12 Column Grid
* 16 Column Grid
* % Column Grid
* HTML5 Boilerplate
* respond.min.js

## Installation
1. Download a copy of the files
2. Build the Sass files yourself, or include one of the pre-compiled CSS file into your project (min or max). 
3. Voila, build your site/app/theme based on the structure. 

## Usage
There are a couple of ways to use it. 

### Main HTML Structure

The main HTML structure is as follows, ``` feckin-grid > a-feckin-row > a-feckin-column ```. Below this, different CSS properties can be applied with the use of simple chained classes.

```
<body class="feckin-grid">
	<div class="a-feckin-row">
		<div class="a-feckin-column width-XX-in-XX">
			<div class="content">1</div>
		</div>

		...

		<div class="a-feckin-row">
			<div class="a-feckin-column width-XX-in-pc">
				<div class="content">XX</div>
			</div>
		</div>            
	</div>
</body>
```

### 12-Column Grid
```
	<div class="a-feckin-row">
		<div class="a-feckin-column width-1-in-12"><div class="content">1</div></div>            
	</div>

	...

	<div class="a-feckin-row">
		<div class="a-feckin-column width-12-in-12"><div class="content">12</div></div>            
		<div class="a-feckin-column width-12-in-12"><div class="content">12</div></div>            
		<div class="a-feckin-column width-12-in-12"><div class="content">12</div></div>            
		<div class="a-feckin-column width-12-in-12"><div class="content">12</div></div>            
		<div class="a-feckin-column width-12-in-12"><div class="content">12</div></div>            
		<div class="a-feckin-column width-12-in-12"><div class="content">12</div></div>
		<div class="a-feckin-column width-12-in-12"><div class="content">12</div></div>            
		<div class="a-feckin-column width-12-in-12"><div class="content">12</div></div>            
		<div class="a-feckin-column width-12-in-12"><div class="content">12</div></div>            
		<div class="a-feckin-column width-12-in-12"><div class="content">12</div></div>            
		<div class="a-feckin-column width-12-in-12"><div class="content">12</div></div>            
		<div class="a-feckin-column width-12-in-12"><div class="content">12</div></div>            
	</div>
```

### 16-Column Grid
```
	<div class="a-feckin-row">
		<div class="a-feckin-column width-1-in-16"><div class="content">1</div></div>            
	</div>

	...

	<div class="a-feckin-row">
		<div class="a-feckin-column width-16-in-16"><div class="content">16</div></div>            
		<div class="a-feckin-column width-16-in-16"><div class="content">16</div></div>            
		<div class="a-feckin-column width-16-in-16"><div class="content">16</div></div>            
		<div class="a-feckin-column width-16-in-16"><div class="content">16</div></div>            
		<div class="a-feckin-column width-16-in-16"><div class="content">16</div></div>            
		<div class="a-feckin-column width-16-in-16"><div class="content">16</div></div>
		<div class="a-feckin-column width-16-in-16"><div class="content">16</div></div>            
		<div class="a-feckin-column width-16-in-16"><div class="content">16</div></div>            
		<div class="a-feckin-column width-16-in-16"><div class="content">16</div></div>            
		<div class="a-feckin-column width-16-in-16"><div class="content">16</div></div>            
		<div class="a-feckin-column width-16-in-16"><div class="content">16</div></div>            
		<div class="a-feckin-column width-16-in-16"><div class="content">16</div></div>            
		<div class="a-feckin-column width-16-in-16"><div class="content">16</div></div>            
		<div class="a-feckin-column width-16-in-16"><div class="content">16</div></div>           
		<div class="a-feckin-column width-16-in-16"><div class="content">16</div></div>           
		<div class="a-feckin-column width-16-in-16"><div class="content">16</div></div>           
	</div>
```

### %-Column Grid
```
<div class="a-feckin-row">
	<div class="a-feckin-column width-100-in-pc">
		<div class="content">100</div>
	</div>
</div>

...

<div class="a-feckin-row">
	<div class="a-feckin-column width-1-in-pc">
		<div class="content">1</div>
	</div>
</div>

```

## Browser Support
IE8+, All other modern browsers. I have no desire to make it work on <=IE7.

## License
There's no real license, it's free to use wherever, fork, change as you need it. The original Sass files are there. 

## Issues
Please feel free to raise issues. I may not be able to fix them right away, but I will try. 
