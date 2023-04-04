# Mock Admin Dashboard

## Introduction

This project is made for the Odin Project's curriculum. This project is meant to demonstrate advanced HTML and CSS concepts such as Grid, for the aptly named course, Advanced HTML and CSS. This project is a mock admin page for a fictional social media website. I made this using primarily HTML and CSS, but also added a little bit of JavaScript to make some of the parts of this page more dynamic and user friendly. This page is responsive, if you find any issues please, please contact me at [bsreynolds.busi@gmail.com](mailto:bsreynolds.busi@gmail.com).

You can view the live server for this project on my Github pages --> [Mock Admin Page](https://bradleysreynolds.github.io/admin-dashboard/)

If you are interested in me or my work please feel free to visit my GitHub page --> [BradleySReynolds on Github](https://github.com/BradleySReynolds)

Lastly, if you'd like to check out my website and portfolio, you can see that here --> [bradleysreynolds.com](https://bradleysreynolds.com/)

## About my Code

### HTML 

Since this page was primarily going to use grid, when I was formatting my HTML I was making a concerted effort to make sure that the different elements were going to be able to be styled well using grid. This started by dividing my body element into three main sections: navigation, which would contain the fake navigation bar; header, which contains the search bar, a greeting section, an account info section and a container with different action buttons; lastly, the main area which contains a projects section, a trending section and an announcement section. 

With this information it is clear to see that each section has sub-sections which makes this page and HTML perfect for using grid!

### CSS 

In this section I want to talk primarily about grid and what I learned from this projects. First, what is grid? Grid is a way of displaying HTML elements by segmenting off different parts of a container. There are two main parts of a grid unit: a track which is the area created within the grid cells, and lines which are the borders of the different grid cells. Consider the following code:

~~~
display: grid
grid-template-columns: 200px 200px
grid-template-rows: 100px 100px 100px
~~~

For the columns two tracks of size 200px were created explicitly, meaning they were created within the template; in the same column there are now 3 lines on each size of each cell, so there is always one more line than track. For the rows we have 3 tracks and 4 lines. Now to specifiy the area that each cell takes up we can use grid-row-start, grid-row-end, grid-column-start or grid-column-end; or to save time we can use grid-row or grid-column; OR to save even more TIME  we can use grid-area, which is shorthand and formated as such:

`grid-area: [grid-row-start] / [grid-column-start] / [grid-row-end] / [grid-column-end]`

When using any of these properties we are using the start and end to be the lines that we discussed earlier, in this project my header had 4 elements formated in a 2 x 2 grid, however, I wanted the top elements to be slightly smaller than the bottom two.



