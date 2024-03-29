import Layout from './Layout'; 
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage'; 
import About from './About'; 
import Missing from './Missing'; 
import EditPost from './EditPost'; 
import { Route, Routes, useNavigate } from 'react-router-dom'; 
import { useState, useEffect } from 'react'; 
import { format } from 'date-fns'; 
import api from './api/posts'; 
import useWindowSize from './hooks/useWindowSize.';
import useAxiosFetch from './hooks/useAxiosFetch';

function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState(''); 
  const [searchResults, setSearchResults] = useState([]); 
  const [postTitle, setPostTitle] = useState(''); 
  const [postBody, setPostBody] = useState('');
  const navigate = useNavigate();
  const [editTitle, setEditTitle] = useState(''); 
  const [editBody, setEditBody] = useState('');
  const { width } = useWindowSize(); 

  const {data, fetchError, isLoading} = useAxiosFetch('http://localhost:3500/posts'); 

  useEffect(() => {
    setPosts(data); 
  }, [data]);

  useEffect(() => {
    const filteredResults = posts.filter(post => 
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase()));
      
      setSearchResults(filteredResults.reverse()); 
    }, [posts, search]);

  const handleSubmit = async (e) =>{
    // POST operation 
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp'); 
    const newPost = { id: `${id}`, title: postTitle, datetime, body: postBody };
    try{
      // simple axios method to do POST request to JSON server
      const response = await api.post('/posts', newPost); 
      const allPosts = [...posts, response.data]; 
      setPosts(allPosts);
      setPostTitle(''); 
      setPostBody('');
      navigate('/'); 
    } catch(err){
      console.log(`Error: ${err.message} `);
    }
  }

  const handleEdit = async (id) => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp'); 
    const updatedPost = { id, title: editTitle, datetime, body: editBody };
    try{
      // PATCH operation
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(posts.map(post => post.id === id ? { ...response.data } : post)); 
      setEditTitle('');
      setEditBody(''); 
      navigate('/'); 
    } catch(err){
      console.log(`Error: ${err.message} `);
    }
  }

  const handleDelete = async (id) =>{
    try{
      await api.delete(`/posts/${id}`)
      const postList = posts.filter(post => post.id !== id);
      setPosts(postList); 
      navigate('/'); 
    } catch(err){
      console.log(`Error: ${err.message} `);
    }
  }

  return (
    <Routes>
      <Route path="/" element={<Layout
        search={search}
        setSearch={setSearch}
        width={width}
      />}>
        <Route index element={<Home posts={searchResults} fetchError={fetchError} isLoading={isLoading}/>}/>
        <Route path="post">
          <Route index element={<NewPost
            handleSubmit={handleSubmit}
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postBody={postBody}
            setPostBody={setPostBody}
          />}/>
          <Route path="/post/:id" element={<PostPage 
            posts={posts} 
            handleDelete={handleDelete}
          />}/>
        </Route>
        <Route path="/edit/:id">
          <Route index element={<EditPost
              posts={posts}
              handleEdit={handleEdit}
              editTitle={editTitle}
              setEditTitle={setEditTitle}
              editBody={editBody}
              setEditBody={setEditBody}
            />}/>
          </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
