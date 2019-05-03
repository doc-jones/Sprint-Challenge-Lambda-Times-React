# Answers

 1. What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
    PropTypes checks your props for their JavaScript type (e.g., string, number) which helps reduces errors in Components and Apps.  If, for example, a backend engineer changes or adds to our data source, checking types received against those expected can alert us to a problem that breaks our App.

 2. Describe a life-cycle event in React?
    componentDidMount - is invoked immediately when a component is initialized. It is commonly used to make a network call for retrieving data from a remote source.  setState is set immediately to insure the data is rendered before the user's browser updates the screen.
 
 3. Explain the details of a Higher Order Component?
    It is a function that takes in a Component and returns another Component. This process can be used to "Wrap" a component in order to add props to a Component. HOCs don't change the original Component. They extend it. For example: when users login to your app.  An HOC can add the login of that current user to the props of another Component.
 
 4. What are three different ways to style components in React? Explain some of the benefits of each.

    1. Inline styles - Because these styles are co-located with JSX and the elements they style, it is easier/faster to find them and see which styles are applied where in one's app. Inline styles don't support use of media queries and pseudos.
 
    2. CSS in JS - Abstracts styling to the component level and generates CSS from JavaScript code.  Inline styles attach styles to DOM nodes but CSS in JS attaches a  <style> tag on top of the DOM making site-wide styling modular and better for branding needs.
 
    3. styled-components - One big advantage of styled-components is style scope. If one changes style in a stylesheet which operates at a global level for an app, it can generate errors in other seemingly unrelated elements. But with styled-components you are applying simplicity with styles located inside the component without the limitations of inline styles.