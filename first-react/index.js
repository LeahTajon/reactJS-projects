// Example #1
/* Try to write that 1-liner of React code again! This time,
see if you can figure out how to render an <ul> with 2+ <li>s inside */

// ReactDOM.render(
//     <ul>
//         <li>JavaScript</li>
//         <li>Python</li>
//     </ul>,
//     document.getElementById('root')
// );


// Example #2
/* Challenge - recreate the above line of code in vanilla JS by creating and appending* an h1 to our div#root (without using innerHTML)

- create a new h1 element
- Give it some textContent
-Give it a class name of "header"
-append it as a child of the div#root
*/

// const h1 = document.createElement('h1');
// h1.textContent = 'Hello Again';
// h1.className = 'header';
// document.getElementById('root').append(h1);

// Example #3
// const page = (
//     <div>
//         <h1 className='header'>This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
//     );

// ReactDOM.render(
//     page,
//     document.getElementById('root')
// );

/* Challenge:

Create a navbar in JSX:
- Use the semantic `nav` element as the parent wrapper
- Have an h1 element with the brand name of your "website"
- Insert an unordered list for the other nav elements
    - Inside the `ul`, have three `li`s for "Pricing", "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTNK for now
*/

const nav = (
    <nav>
        <h1>Website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(
    nav,
    document.getElementById('root')
);