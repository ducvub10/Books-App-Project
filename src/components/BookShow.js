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

    const handleSubmit = () => {
        setShowEdit(false);
    }

    let content = <h3>{book.title}</h3>
    if (showEdit){
        content = <BookEdit onEdit={onEdit} book = {book} onSubmit = {handleSubmit}/>;
    }

    return <div className="book-show">
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