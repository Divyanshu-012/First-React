import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
const title = 'The HouseMaid';
const img = './images/book1.jpg';

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
            <Book job="developer" />
            <Book title='random title' number={22} />

        </section>
    )


}
// props used to give  different data to different elements in a website w/o repeating it to the multiple elements 
const Book = (props) => {
    console.log(props);
    return (
        <article className='book'>
            <img
                src={img}
                alt='The HouseMaid'
            />
            <h2> {title}</h2>
            <h4 >Freida McFadden</h4>
            <p>{props.job}</p>
            <p>{props.title}</p>
            <p>{props.number}</p>


        </article>
    );
};





const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);



