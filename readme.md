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
display: grid;
grid-template-columns: 200px 200px;
grid-template-rows: 100px 100px 100px;
~~~

For the columns two tracks of size 200px were created explicitly, meaning they were created within the template; in the same column there are now 3 lines on each size of each cell, so there is always one more line than track. For the rows we have 3 tracks and 4 lines. Now to specifiy the area that each cell takes up we can use grid-row-start, grid-row-end, grid-column-start or grid-column-end; or to save time we can use grid-row or grid-column; OR to save even more TIME  we can use grid-area, which is shorthand and formated as such:

`grid-area: [grid-row-start] / [grid-column-start] / [grid-row-end] / [grid-column-end];`

When using any of these properties we are using the start and end to be the lines that we discussed earlier, in this project my header had 4 elements formated in a 8 x 6 grid, however, I wanted the top elements to be slightly smaller than the bottom two. Consider this code to properly format this the way I wanted: 

~~~
.search--container {
    grid-area: 1 / 1 / 3 / 6;
}

.greeting--container {
    grid-area: 3 / 1 / -1 / 6;
}

.account--container {
    grid-area: 1 / 6 / 3 / -1;
}

.btns--container {
    grid-area: 3 / 6 / -1 / -1;
}
~~~

Keep in mind when I use -1 I am saying that I want this grid cell to go to the last line in the explicitly determined range. Now I keep using the word explicit, but lines can be created implicitly and that would be if I specified a container to move to a line that was outside of whatever was specified explicitly -- however, I did not utilize this in this project.

A final question people have often is: can flex and grid be used together? the answer to this is YES and it can make your page very powerful. Use grid to make the specific demensions of the cell/element that you want and then use flex to display the content of the element. Here are some examples: 

~~~
.search--container {
    grid-area: 1 / 1/ 3 / 6;
    padding-left: 1rem;
    margin: 0rem 0.4rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.account--container {
    grid-area: 1 / 6 / 3 / -1;
    display: flex;
    justify-content: center;
    align-items: center;
}
~~~

When it came to making the page responsive, when elements got to close together I readjusted the grid area and made other elements disappear. One example is the navigation bar that becomes a hamburger menu when the screen goes under 900px.

### JavaScript

I wanted to create a menu that scrolled down when the hamburger menu appeared when the screen got to a smaller size. I used JavaScript to do this; simply I created closeMenu and openMenu functions that applied and removed styles. One issue I ran into because I chose to make it so that the hamburger menu only appeared when the window got small enough was that if the window was resized to being bigger, then the styles would remained applied which has the effect of totally removing navigation. This was an easy fix however because all I had to do was apply a new function I called set inital which set all the styles back to their initial state on a window resize.





