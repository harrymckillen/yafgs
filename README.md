#Yet another feckin' grid system

It doesn't do anything any other grid system doesn't do. 

Based on a 1140px max width, it's a fluid responsive grid system. The idea of it is that it provides a number of different options to hopefully fit a wide variety of needs. It's essentially a mixed grid system, with a few different pattern types. 

## Demo
If you wish to see the Grid System in action, check out <a href="http://demos.wolfhound.ie/yafgs/demo.html" target="_blank">the demo page</a>. Where possible I've tried to display the many examples of what the GS can do. However, you can also mix and match the different types of demos, so that there is a near endless list of combinations you can achieve, which will hopefully cover the majority of use cases. 

## Features

* Flexible grid system
* ~ 31Kb in size

## Installation
* Download a copy of the files
* Build the Sass files yourself, or include one of the pre-compiled CSS file into your project (min or max). 

`
<link rel="stylesheet" href="css/yafgs.max.css">
OR
<link rel="stylesheet" href="css/yafgs.min.css">
`

* Voila, build your site/app/theme based on the structure. 

## Usage
There are a couple of ways to use it. The main HTML structure is as follows, ``` feckin-grid > a-feckin-row > a-feckin-column ```. Below this, different CSS properties can be applied with the use of simple chained classes.

***


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
## Positioning Columns 
There are a couple of classes available for the position of columns within the grid, with the ability to center, or nudge (left or right) columns. 

### Centering

A centered class can be applied to a column like so. However, it will cause all other columns in that row to float beneath it. 

```
	<div class="a-feckin-row">
		<div class="a-feckin-column width-12-in-12 centered">
			<div class="content"> Centered 12</div>
		</div>
	</div>
```

### Nudging
There a few options for nudging. 

#### 12 Column Nudging Left or Right
Uses the class `nudge-12-left-xx` or `nudge-12-right-xx` (where xx is from 1...11).

```
	<div class="a-feckin-row">
		<div class="a-feckin-column width-12-in-12 nudge-12-(left|right)-1">
			<div class="content"> Nudge Left 1</div>
		</div>
	</div>

	...

	<div class="a-feckin-row">
		<div class="a-feckin-column width-12-in-12 nudge-12-(left|right)-11">
			<div class="content"> Nudge Left 1</div>
		</div>
	</div>	
```

#### 16 Column Nudging Left or Right
Uses the class `nudge-16-left-xx` or `nudge-16-right-xx` (where xx is from 1...14).

```
	<div class="a-feckin-row">
		<div class="a-feckin-column width-16-in-16 nudge-16-(left|right)-1">
			<div class="content"> Nudge Left 1</div>
		</div>
	</div>

	...

	<div class="a-feckin-row">
		<div class="a-feckin-column width-16-in-16 nudge-16-(left|right)-14">
			<div class="content"> Nudge Left 1</div>
		</div>
	</div>	
```

#### % Nudging Left or Right
Uses the class `nudge-pc-left-xx` or `nudge-pc-right-xx` (where xx is from 1...99). This is meant to be as flexible as possible, using the 99% nudge will obviously push any elements beyond the width of the containing element. 

```
	<div class="a-feckin-row">
		<div class="a-feckin-column width-xx-in-xx nudge-pc-left-1">
			<div class="content"> Nudge 1% Left </div>
		</div>
	</div>
```


## Browser Support
IE8+, All other modern browsers. I have no desire to make it work on <=IE7.

## License
There's no real license, it's free to use wherever, fork, change as you need it. The original Sass files are there. 

## Issues
Please feel free to raise issues. I may not be able to fix them right away, but I will try. 
