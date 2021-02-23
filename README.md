# Olive groves test

You are a farmer wanting to understand the distribution of olive types your land currently holds. You have data available: `olive_stats`.json that needs to be graphically represented with a histogram (bar chart).

We want to look at the frequency distribution of each property available in the data set. The chart should look similar to the one below:

<img src="distribution_chart_example.png"  width="520" height="420">

A dropdown should allow the user to view the distribution of a different property in the dataset. For example, the farmer should be able to see the distribution between the black olives and green olives by choosing the `color` property in the dropdown.

You can choose to draw the bar chart with any library of your choice or even create your own.
A good and flexible library that you may want to consider is `plot.ly` and this is a bar chart example: https://plot.ly/javascript/bar-charts/

**Note: The styles and colours don't have to match, you are free to use vanilla JS or any frameworks of choice.**

_Suggested steps:_

- Retrieve data
- Transform data
- Render data
- Add change event in the dropdown
