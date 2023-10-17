import './Users.scss';
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import User from '../user/User';

const Users = () => {
    const { isLoading, error, data } = useQuery(["users"], () =>
    makeRequest.get(`/users/all`).then((res) => {
      return res.data;
    })
  );
  return (
      <div className='users'>
          <h3>Users</h3>
          {error
              ? "Something went wrong!"
              : isLoading
                  ? "loading"
                  : data.map((user) => <User user={user} key={user.id} style={{alignItems:"center"}}/> )
          }
      </div>
  )
}

export default Users