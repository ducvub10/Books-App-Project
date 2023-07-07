import axios from 'axios';
import {useState, useEffect, useCallback} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App(){
    const [books,setBooks] = useState([]);

    //fetch all books from API in first render  
    const fetchBooks = useCallback (async () =>{
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    }, []);

    

    const editBookByID = async (id, newTitle) =>{
        const response = await axios.put('http://localhost:3001/books/' + id,  {// or `http://localhost/3001/books/${id}`
            title: newTitle
        });

        const updatedBooks = books.map((book)=>{
            if(book.id === id){
                return {...book,...response.data} //Better to use data fetched from API than raw data newTitle so it's more up-to-date
            }  

            return book;
        })
        setBooks(updatedBooks);
    }

    const deleteBookByID = async (id)=>{
        await axios.delete(`http://localhost:3001/books/${id}`);

        const updatedBook = books.filter((book) =>
        {
            return book.id !== id;
        })

        setBooks(updatedBook);
    }
    const createBook = async (title) =>{ //create event handler
        const response = await axios.post('http://localhost:3001/books', {
            title, // = title: title
        });

       
        //Create a new updatedBook object and update state with it.
        const updatedBook = [
            ...books,
            response.data,
        ]
        setBooks(updatedBook);
    }
    //call bookcreate
    return (
    <div className='app'>
        <h1>Reading List</h1>
        <BookList books = {books} onDelete = {deleteBookByID} onEdit ={editBookByID}/>
        <BookCreate onCreate={createBook}/> 
        
    </div>
    )
}

export default App;