### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

Depending on one's opinion React is considered either a framework or a library. Going with the framework definition it is a front-end JavaScript framework that has become very popular. Devs love react because it requires you to write much less code and accomplish powerful results. I would use React if I had a large application, it's nice because it allows you to break up your code into multiple, reusable components this makes functionality more organized.

- What is Babel?

Think of Babel as a translator or convertor. It takes JS code and converts it into a version which is compatible with all browers. 

- What is JSX?

Through Babel we get a nice feature known as JSX. JSX allows us to write HTML syntax in React. The syntax is not HTML but is very similar and follows many similar patterns. 


- How is a Component created in React?

A Component is a render function which renders JSX onto the DOM. It is called like any regular function. It renders the HTML-like JSX to the DOM. These components are resuable pieces of code used throughout the application. By decalring the function you create the component which renders content. 


- What are some difference between state and props?

The purpose of props is to pass data from a parent component to a child component, while state allows us to influence data in the component. With state we can have data start out as one value and set it to change when something happens. For example you can have an element start out as an empty string then when you change the state it can become a string containing characters. Say you have a button that adds to a list which starts empty but when you click the list is populated with text. 

- What does "downward data flow" refer to in React?

This refers to passing data down from a parent to a child component. You can also pass down functions. Data in react can only flow down from a parent component to the child. 

- What is a controlled component?

A controlled component is simply a component that is controled by the state in React. For example form data will be handled by React, we are giving complete control of the input to React this is why we use a onChange. 

- What is an uncontrolled component?

An uncontrolled component has its own state. For example form data is handled by the DOM. 

- What is the purpose of the `key` prop when rendering a list of components?

Using .map is very common in React so we can render lists from arrays onto the DOM, for example a todo list app will map over an array of text to render onto the DOM. This is why we must provide a unique key prop so React can differentiate each item with a uniqu id.  

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

An index in an array fails to uniquely identify your list item. If the array you are rendering changes in any way this can result in unintended consequences when rendering. 

- Describe useEffect.  What use cases is it used for in React components?

useEffect is a react hook that allows you to create side-effects within your components. Fetching data is an example of a side-effect as well as timers. If you're making an axios request you should implement a useEffect. The dependency array you use as a second argument is great because it gives you complete control over the side-effect. 

- What does useRef do?  Does a change to a ref value cause a rerender of a component?

useRef allows data to persist between renders. It can be used to access DOM elements directly. It stops unnecessary re-renders.


- When would you use a ref? When wouldn't you use one?

Too many re-renders can negatively impact the performance of your app. You can use it for direct DOM manipulation. If you need to re-render a component don't use useRef, use useState.

- What is a custom hook in React? When would you want to write one?

If you have a toggle function  in one component for example but have other components that require a toggle function it can get annoying to write that function repeatedly, it would be nice to have a generic toggle function that can be re-used across multiple components. Or say you have to make an axios request in multiple components; rather than having to repeat logic over and over you can write one axios request and pass in a url as a parameter so it can be re-used across the other components that also need to make an API request. 
