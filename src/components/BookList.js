import BookShow from "./BookShow";

function BookList ({books, onDelete}){
    const renderedBook = books.map((book)=>{
        return <BookShow onDelete = {onDelete} key = {book.id} book ={book}/>
    })
    return <div className="book-list">{renderedBook}</div>

}

export default BookList;