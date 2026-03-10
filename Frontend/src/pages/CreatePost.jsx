import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function CreatePost() {

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    axios.post("https://posts-tewt.onrender.com/create-post", formData)
      .then(() => {
        navigate("/feed")
      })
  }

  return (
    <section className="create-post-section">
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <input type="file" name="image" accept="image/*" />
        <input type="text" name="caption" placeholder="Enter Caption" required />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}