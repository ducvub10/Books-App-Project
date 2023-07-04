import {useState} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
function App(){
    const [books,setBooks] = useState([]);


    const editBookByID = (id, newTitle) =>{
        const updatedBooks = books.map((book)=>{
            if(book.id === id){
                return {...book, title:newTitle}
            }

            return book;
        })
        setBooks(updatedBooks);
    }

    const deleteBookByID = (id)=>{
        const updatedBook = books.filter((book) =>
        {
            return book.id !== id;
        })

        setBooks(updatedBook);
    }
    const createBook = (title) =>{ //create event handler
        //Create a new updatedBook object and update state with it.
        const updatedBook = [
            ...books,
            {
            id: Math.round(Math.random()*99999), 
            title: title}
        ]
        setBooks(updatedBook);
    }
    //call bookcreate
    return (
    <div className='app'>
        <BookList books = {books} onDelete = {deleteBookByID} onEdit ={editBookByID}/>
        <BookCreate onCreate={createBook}/> 
        
    </div>
    )
}

export default App;