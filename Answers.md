1. What problem does the context API help solve?

Context API allows us to pass state between components freely without the pain of prop drilling

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions is a collection of action creators that work in conjunction with your reducers to fire events that change state. Reducers read the object created by your actions and alter state based on the data contained within. The store is the "single source of truth" because it holds ALL of an application's state information, which in turn controls the app.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is a sort of global state for the entire app while component state is limited to certain parts. You might use component state to restrict the access of certain parts of your app to sensitive state values. Generally application state is preferred as you have more control over it.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk allows us to return functions from other functions. It acts as a middleware that intercepts our action-creators and, if the returned value is an action object will pass it along to dispatch, or if it's a function will evaluate the function and then dispatch actions after.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I love Redux! I like the idea of global application state management levers, and find it incredibly intuitive to pass state properties between components and use global variables to handle Finite State Machines in an application.
