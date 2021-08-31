# MERN-TypeScript-7weeks

## Week 4 - Day 3 - Methods

*Prerequisite Knowledge: React Redux with TypeScript, HTTP methods*

*Exercise Goals: Practice using the React Redux with TypeScript application we created yesterday with practical features like an HTTP request. Gain confidence using the common JavaScript methods `.map()`, `.filter()`, and `.reduce()` within the React Redux with TypeScript environment.*

### MVP
Fetch and Manipulate Data with your React Redux with TypeScript Boilerplate
1. Begin with your boilerplate that you developed yesterday to create a new React application with Redux and TypeScript
2. Setup `react-router-dom` so that you have a Welcome Page and a new page/route for each of the numbered exercises below.
3. Go to [JSON Placeholder](https://jsonplaceholder.typicode.com/) and fetch <ins>an array of data</ins> from the [posts API](https://jsonplaceholder.typicode.com/posts). Please refer to last week's lessons for help and you can find API documentation [here](https://jsonplaceholder.typicode.com/guide/). You should be able to `console.log` all of the data you've received from the API.
4. Use the `.map()` to loop through that array of data, set them as an unordered list of items, don't forget to use the id as key, and render each post title. You should be able to see each post title in the web browser.
5. Use the `.filter()` method to find posts with even ID numbers. Render the title and description posts with even IDs in the browser. 
6. Use the `.reduce()` method to find the sum of all post IDs. Use the previous methods to render all of the ID numbers sequentially followed by the amount found using the `.reduce()` method so that it appears as a long list of integers with a total of those itegers at the bottom.

### Stretch Goal
Recursive Component in React with TypeScript

Coding demonstration found at [YouTube - Richard Hong - Building Recursive Components in React](https://www.youtube.com/watch?v=a5aumoJWbKk).

Build a recursive component like found in the YouTube video or view the source code [here](https://github.com/H-Richard/recursive-react).

### SUPER Stretch Goal
Curried Functions

Create a new component to render some curried data! Don't forget to show off to the rest of your teammates! =)