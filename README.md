# Yet another feckin' grid system

* [Introduction](#introduction)
* [See it in action](#see-it-in-action)
* [Features](#features)
* [Installation](#installation)
* [Usage](#usage)
* [Browser Support](#browser-support)
* [License](#license)
* [Issues](#issues)

## Introduction

### What is it?

Like any grid system you've seen previously. I make no promises this will change your life, rock your world or any other such nonsense. It's just a very straightforward and frank grid system. It works the way it works. Might not be everyone's cup of tea.

The idea of it is that it provides a number of different options to hopefully fit a wide variety of needs. It's essentially a mixed grid system, where I've cobbled together a few different ideas I've gotten from other grid systems I've used and put them into one single grid system.

There are 3 main grid widths:

* Large - 1140px max width
* Medium - 960px max width
* Small - 800px max width

#### Version 1.x

Relies on the old method of floats, clear, percentages. Tried and tested. 

See <a href="http://yafgs.wolfhound.ie/reference/" target="_blank">Version 1.x Reference</a>

#### Version 2.x

Introduces CSS Flexbox. Currently has very basic support for it. As I learn about Flexbox, and browser support improves, I will develop this version further.

See <a href="http://yafgs.wolfhound.ie/reference/v2.html" target="_blank">Version 2.x Reference</a>

## See it in action
If you wish to see the Grid System in action, check out <a href="http://yafgs.wolfhound.ie/" target="_blank">yafgs.wolfhound.ie</a>. 

## Features

* Flexible grid system
* ~ 29Kb in size for the lot
* For individual grid types, can be ~3Kb.

## Installation

* Download the build(version).zip
* Include one of the pre-compiled CSS file into your project (min or max). 

```
<link rel="stylesheet" href="css/yafgs.full.(max|min).css">
<link rel="stylesheet" href="css/yafgs.12.(max|min).css">
<link rel="stylesheet" href="css/yafgs.16.(max|min).css">
<link rel="stylesheet" href="css/yafgs.pc.(max|min).css">

```

* Voila, build your site/app/theme based on the structure. See [Usage](#usage)

## Usage

See the <a href="http://yafgs.wolfhound.ie/reference/" target="_blank">YAFGS Reference</a>. 

## Browser Support
* v1.x: IE8+, All other modern browsers. I have no desire to make it work on <=IE7.
* v2.x: Only modern browsers, see <a href="http://caniuse.com/#feat=flexbox" target="_blank">caniuse.com</a>. 

## License
I've added an MIT License. Go nuts! 

## Issues
Please feel free to raise issues. I may not be able to fix them right away, but I will try. 
