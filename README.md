#Yet another feckin' grid system

* [Introduction](#introduction)
* [See it in action](#see-it-in-action)
* [Features](#features)
* [Installation](#installation)
* [Usage](#usage)
* [Browser Support](#browser-support)
* [License](#license)
* [Issues](#issues)

## Introduction

It doesn't do anything any other grid system doesn't do. 

The idea of it is that it provides a number of different options to hopefully fit a wide variety of needs. It's essentially a mixed grid system, with a few different pattern types. 

There are 3 main grid widths:
* Large - 1140px max width (default)
* Medium - 960px max width
* Small - 800px max width

## See it in action
If you wish to see the Grid System in action, check out <a href="http://yafgs.wolfhound.ie/" target="_blank">yafgs.wolfhound.ie</a>. 

## Features

* Flexible grid system
* ~ 28Kb in size

## Installation
* Download the build(version).zip
* Include one of the pre-compiled CSS file into your project (min or max). 

`
<link rel="stylesheet" href="css/yafgs.max.css">
OR
<link rel="stylesheet" href="css/yafgs.min.css">
`

* Voila, build your site/app/theme based on the structure. 

## Usage
There are a couple of ways to use it. The main HTML structure is as follows, ``` the-grid > a-row > a-column ```. Below this, different CSS properties can be applied with the use of simple chained classes.

***

### Default 1140px Grid
```
<body class="the-grid">
</body>
```

### Medium 960px Grid
```
<body class="the-grid medium">
</body>
```

### Small 800px Grid
```
<body class="the-grid small">
</body>
```

### 12-Column Grid
```
	<div class="a-row">
		<div class="a-column width-1-of-12"><div class="content">1</div></div>            
	</div>

	...

	<div class="a-row">
		<div class="a-column width-12-of-12"><div class="content">12</div></div>            
		<div class="a-column width-12-of-12"><div class="content">12</div></div>            
		<div class="a-column width-12-of-12"><div class="content">12</div></div>            
		<div class="a-column width-12-of-12"><div class="content">12</div></div>            
		<div class="a-column width-12-of-12"><div class="content">12</div></div>            
		<div class="a-column width-12-of-12"><div class="content">12</div></div>
		<div class="a-column width-12-of-12"><div class="content">12</div></div>            
		<div class="a-column width-12-of-12"><div class="content">12</div></div>            
		<div class="a-column width-12-of-12"><div class="content">12</div></div>            
		<div class="a-column width-12-of-12"><div class="content">12</div></div>            
		<div class="a-column width-12-of-12"><div class="content">12</div></div>            
		<div class="a-column width-12-of-12"><div class="content">12</div></div>            
	</div>
```

### 16-Column Grid
```
	<div class="a-row">
		<div class="a-column width-1-of-16"><div class="content">1</div></div>            
	</div>

	...

	<div class="a-row">
		<div class="a-column width-16-of-16"><div class="content">16</div></div>            
		<div class="a-column width-16-of-16"><div class="content">16</div></div>            
		<div class="a-column width-16-of-16"><div class="content">16</div></div>            
		<div class="a-column width-16-of-16"><div class="content">16</div></div>            
		<div class="a-column width-16-of-16"><div class="content">16</div></div>            
		<div class="a-column width-16-of-16"><div class="content">16</div></div>
		<div class="a-column width-16-of-16"><div class="content">16</div></div>            
		<div class="a-column width-16-of-16"><div class="content">16</div></div>            
		<div class="a-column width-16-of-16"><div class="content">16</div></div>            
		<div class="a-column width-16-of-16"><div class="content">16</div></div>            
		<div class="a-column width-16-of-16"><div class="content">16</div></div>            
		<div class="a-column width-16-of-16"><div class="content">16</div></div>            
		<div class="a-column width-16-of-16"><div class="content">16</div></div>            
		<div class="a-column width-16-of-16"><div class="content">16</div></div>           
		<div class="a-column width-16-of-16"><div class="content">16</div></div>           
		<div class="a-column width-16-of-16"><div class="content">16</div></div>           
	</div>
```

### %-Column Grid
```
<div class="a-row">
	<div class="a-column width-100-in-pc">
		<div class="content">100</div>
	</div>
</div>

...

<div class="a-row">
	<div class="a-column width-1-in-pc">
		<div class="content">1</div>
	</div>
</div>

```
### Positioning Columns 
There are a couple of classes available for the position of columns within the grid, with the ability to center, or nudge (left or right) columns. 

#### Centering

A centered class can be applied to a column like so. However, it will cause all other columns in that row to float beneath it. 

```
	<div class="a-row">
		<div class="a-column width-12-of-12 centered">
			<div class="content"> Centered 12</div>
		</div>
	</div>
```

### Nudging
There a few options for nudging. 

#### 12 Column Nudging Left or Right
Uses the class `nudge-12-left-xx` or `nudge-12-right-xx` (where xx is from 1...11).

```
	<div class="a-row">
		<div class="a-column width-12-of-12 nudge-12-(left|right)-1">
			<div class="content"> Nudge Left 1</div>
		</div>
	</div>

	...

	<div class="a-row">
		<div class="a-column width-12-of-12 nudge-12-(left|right)-11">
			<div class="content"> Nudge Left 1</div>
		</div>
	</div>	
```

#### 16 Column Nudging Left or Right
Uses the class `nudge-16-left-xx` or `nudge-16-right-xx` (where xx is from 1...14).

```
	<div class="a-row">
		<div class="a-column width-16-of-16 nudge-16-(left|right)-1">
			<div class="content"> Nudge Left 1</div>
		</div>
	</div>

	...

	<div class="a-row">
		<div class="a-column width-16-of-16 nudge-16-(left|right)-14">
			<div class="content"> Nudge Left 1</div>
		</div>
	</div>	
```

#### % Nudging Left or Right
Uses the class `nudge-pc-left-xx` or `nudge-pc-right-xx` (where xx is from 1...99). This is meant to be as flexible as possible, using the 99% nudge will obviously push any elements beyond the width of the containing element. 

```
	<div class="a-row">
		<div class="a-column width-xx-in-xx nudge-pc-left-1">
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
