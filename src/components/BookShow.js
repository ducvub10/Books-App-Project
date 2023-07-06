import {useState} from 'react';
import BookEdit from './BookEdit';
function BookShow ({book, onDelete, onEdit}){ //Pass the reference to onDelete, which delete something by id
    const [showEdit, setShowEdit] = useState(false);

    const handleDeleteClick = () =>{//handler for when the button is clicked, call onDelete
        onDelete(book.id);
    }
    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleSubmit = (id, newTitle) => {
        setShowEdit(false);
        onEdit(id, newTitle)
    }

    let content = <h3>{book.title}</h3>
    if (showEdit){
        content = <BookEdit book = {book} onSubmit = {handleSubmit}/>;
    }

    return <div className="book-show">
        <img alt ='books' src = {`http://picsum.photos/seed/${book.id}/300/200`} />
        <div> 
            {content}
        </div>
        <div className="action">
            <button className='edit' onClick = {handleEditClick}>
                Edit
            </button>
            <button className="delete" onClick = {handleDeleteClick}>
                Delete 
            </button>
        </div>
    </div>
}

export default BookShow;