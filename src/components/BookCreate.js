import {useState} from 'react';

function BookCreate ({onCreate}){
    const [title, setTitle] = useState('');
    //handling change is to update {title}
    const handleChange = (event) =>{ //change handler
        setTitle(event.target.value);
    }
    //handling submits is to submit the title to App.js
    const handleSubmit =(event) =>{ //submit handler
        event.preventDefault();
        onCreate(title);
        setTitle(''); //make content disapear after use
    };

    return <div className='book-create' onSubmit = {handleSubmit}>
    <form>
        <label>Title</label>
        <input className='input' value = {title} onChange = {handleChange}/>
        <button className = 'button'>Create!</button>
    </form>
    </div>
}

export default BookCreate;