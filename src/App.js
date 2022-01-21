import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { fetchPostsRequest } from './redux/actions/postsActions'

function App () {
  const dispatch = useDispatch()
  const { pending, posts, error } = useSelector(state => state.posts)

  useEffect(() => {
    dispatch(fetchPostsRequest())
  }, [])

  return (
    <div className='App'>
      <h1>Posts</h1>
      {pending
        ? (
          <div>Loading...</div>
          )
        : error
          ? (
            <div>Error!</div>
            )
          : (
              posts?.map((post, index) => (
                <div key={post.id}>
                  {++index}. {post.title}
                </div>
              ))
            )}
    </div>
  )
}

export default App
