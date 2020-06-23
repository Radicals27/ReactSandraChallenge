# This was an exercise for Coder Academy, day 1 of React:

## Exercise 2
Afternoon challenge HTML File (src\day76-afternoon.html)

Take the above file and break it down into React functional components.
Move each of those components into its own file and export/import them.

## Exercise 3

### Refactor code into components

Afternoon challenge HTML File (right-click and “Save As”)

Starting with the React Intro challenge (or download the HTML above), further refactor it into reusable components (i.e. components that generalise functionality but take props, much like a general function takes parameters). Also organise these components in a way that makes sense to you.

Repeated code that is similar except for attribute (prop) values is a good candidate for factoring out into a component that takes props. For example, for the unordered list in the About Me section, you could pass into a component an array of the text and have it render individual <li> elements.

Example: <ul><BulletPoints items={['one', 'two']} /></ul> would render to the DOM as <ul><li>one</li><li>two</li></ul>