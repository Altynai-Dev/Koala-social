import { getAuthUser } from '../../helpers/functions'
import './Stories.scss'

const Stories = () => {
  const user = getAuthUser();
  console.log(user)
  return (
    <div className='stories'>
      <div className="story">
                <img src={user.profilePic} alt='story' style={{width: 150}} />
                <span>{user.username}</span>
                <button>+</button>
            </div>
        {/* {stories.map(story =>(
            <div className="story" key={story.id}>
                <img src={story.img} alt='story' />
                <span>{story.name}</span>
            </div>
        ))} */}
    </div>
  )
}

export default Stories