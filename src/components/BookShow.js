function BookShow ({book, onDelete}){

    const handleClick = () =>{
        onDelete(book.id);
    }

    return <div className="book-show">
        {book.title}
        <div className="action">
            <button className="delete" onClick = {handleClick}>
                Delete 
            </button>
        </div>
    </div>
}

export default BookShow;