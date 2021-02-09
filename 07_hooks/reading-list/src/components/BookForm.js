import React,{ useState } from 'react';

const NewBookForm = () => {
    
    const [title,setTitle] = useState("");
    const [author,setAuthor] = useState("");

       return (
        <div>
            <form >
                    <input 
                        placeholder="Book title"
                        type="text" 
                        value={title}           
                        onChange={(e) => setTitle(e.target.value)}/> 

                    <input
                        placeholder="Author's name" 
                        type="text" 
                        value={author}           
                        onChange={(e) => setAuthor(e.target.value)}/>
                    <button>Submit</button>
            </form>
            <h4>The author is: {author} and the title of the book is: {title}.</h4>
        </div>
       )
  };

export default NewBookForm