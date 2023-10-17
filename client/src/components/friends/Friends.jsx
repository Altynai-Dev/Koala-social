import './Friends.scss';
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { getAuthUser } from '../../helpers/functions';

const Friends = () => {
    const currentUser = getAuthUser();

    const { isLoading: rIsLoading, data: relationshipData } = useQuery(
        ["relationship"],
        () =>
          makeRequest.get(`/relationships?followedUserId=${currentUser.id}`).then((res) => {
            return res.data;
          })
      );
    
      const queryClient = useQueryClient();
     console.log(relationshipData)
  return (
    <div className='friends'>

    </div>
  )
}

export default Friends