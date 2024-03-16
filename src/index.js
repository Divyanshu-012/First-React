import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
const firstBook = {
    author: 'Freida McFadden',
    title: 'The HouseMaid',
    img: './images/book1.jpg',
}


const secondBook = {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: './images/book2.jpg',
}



//parameters 
// const someFunction = (param1, param2) => {
//     console.log(param1, param2)

// };

//arguments
// someFunction('job', 'developer');





// function Greeting() {
//     return <h2>My First Component</h2>;

// }

function BookList() {
    return (
        <section className='booklist'>
            <Book
                author={firstBook.author}
                title={firstBook.title}
                img={firstBook.img}
            />


            <Book
                author={secondBook.author}
                title={secondBook.title}
                img={secondBook.img}
            />

        </section>
    )


}
// props used to give  different data to different elements in a website w/o repeating it to the multiple elements 
const Book = (props) => {
    console.log(props);
    {/* in case we want to add something in one element only we use children prop */ }
    // const { img, title, author, children } = props
    const { img, title, author } = props
    return (
        <article className='book'>

            <img
                src={img}
                alt={title}
            />
            <h2> {title}</h2>
            <h4 >{author}</h4>
            {/* in case we want to add something in one element only we use children prop */}
            {/* {children} */}


        </article>
    );
};





const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);



