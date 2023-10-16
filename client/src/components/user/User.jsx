import './User.scss'

const User = ({user}) => {
    return (
        <div className="uInfo">
            <div>
            <img src={'/upload/' + user.profilePic} alt='pic' />
            </div>
            <div>{user.name}</div>
            <div>{user.city}</div>
        </div>
  )
}

export default User