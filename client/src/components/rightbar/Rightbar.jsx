import "./Rightbar.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const RightBar = () => {
  const { isLoading, error, data } = useQuery(["users"], () =>
    makeRequest.get(`/users/all`).then((res) => {
      return res.data;
    })
  );
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          {error ? "Something went wrrong!"
          : isLoading ? "Loading..."
          : data.map((user)=>
          <div key={user.id} className="user">
          <div className="userInfo">
          <img src={'/upload/' + user.profilePic} alt='user' />
            <span>{user.name}</span>
          </div>
          <div className="buttons">
            <button>follow</button>
            <button>dismiss</button>
          </div>
        </div>
          )}  
        </div>
      </div>
    </div>
  );
};

export default RightBar;