import { useState } from "react"
import { useNavigate } from "react-router-dom";
const Create = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('yoshi');
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault()
    const blog = {title, body, author}
    setLoading(true);
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      header: {"Content-Type": "application/json"}, //sendng json data
      body: JSON.stringify(blog)

    }).then(()=>{
      console.log("Added")
      setLoading(false);
      navigate('/');
    })
  }
  return (
    <div className='create'>
      <h2>Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title: </label>
        <input 
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

         <label>Blog Body</label>
         <textarea 
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
         ></textarea>

         <label>Blog Author:</label>
         <select 
          value={author}
          onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
         </select>

        {!loading && <button>Submit Blog</button>}
        {loading && <button disabled>Adding blog...</button>}
      </form>
    </div>
  )
}

export default Create
