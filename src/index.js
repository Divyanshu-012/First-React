import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';



// function Greeting() {
//     return <h2>My First Component</h2>;

// }

function BookList() {
    return (
        <section className='booklist'>
            <Book />
            <Book />
            <Book />
            <Book />



        </section>
    )


}

const Book = () => {
    return (
        <article className='book'>
            <Image />
            <Title />
            <Author />

        </article>
    );
};

const Image = () => (
    <img
        src='https://images-na.ssl-images-amazon.com/images/I/81AHTyq2wVL._AC_UL300_SR300,200_.jpg'
        alt='The HouseMaid'
    />
);
const Title = () => <h2> The HouseMaid</h2>;
const Author = () => {
    return <h4>Freida McFadden</h4>;

}



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);



