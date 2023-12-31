// import './Share.scss';
// import Image from '../../assets/images/img.png';
// import { getAuthUser } from '../../helpers/functions';
// import { useState } from 'react';
// import {useDispatch} from "react-redux";
// //import { createPost, uploadImage } from '../../store/posts/postsActions';
// import axios from 'axios';
// import { getPosts } from '../../store/posts/postsActions';

// const Share = () => {
//   const [file, setFile] = useState(null);
//   const [desc, setDesc] = useState('');
//   const user = getAuthUser();

//   const dispatch = useDispatch();

//   const upload = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("file", file);
//       const res = await axios.post("http://localhost:8888/api/upload", formData, {
//         withCredentials: true
//       });
//       return res.data.url;
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   const createPost = (post) =>{
//     return axios.post('http://localhost:8888/api/posts', post, {
//       withCredentials: true
//     });
//     }
//   const handleClick = async(e) =>{
//     e.preventDefault();
//     let imgUrl = "";
//     if(file) imgUrl = await upload();
//     createPost({ desc, img: imgUrl});
//     setDesc("");
//     setFile(null);
//     dispatch(getPosts())
//   }
//   return (
//     <div className="share">
//     <div className="container">
//       <div className="top">
//         <div className="left">
//           <img src={user.profilePic} alt="user" />
//           <input
//             type="text"
//             placeholder={`What's on your mind, ${user.username}?`}
//             onChange={(e) => setDesc(e.target.value)}
//             value={desc}
//           />
//         </div>
//         <div className="right">
//           {file && (
//             <img className="file" alt="" src={URL.createObjectURL(file)} />
//           )} 
//         </div>
//       </div>
//       <hr />
//       <div className="bottom">
//         <div className="left">
//           <input
//             type="file"
//             id="file"
//             style={{ display: "none" }}
//             onChange={(e) => setFile(e.target.files[0])}
            
//           />
//           <label htmlFor="file">
//             <div className="item">
//               <img src={Image} alt="" />
//               <span>Add Image</span>
//             </div>
//           </label>
//         </div>
//         <div className="right">
//           <button onClick={handleClick}>Share</button>
//         </div>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default Share

import "./Share.scss";
import Image from "../../assets/images/img.png";
import { getAuthUser } from '../../helpers/functions';
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Share = () => {
  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState("");

  const currentUser = getAuthUser();
  const queryClient = useQueryClient();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const mutation = useMutation(
    (newPost) => {
      return makeRequest.post("/posts", newPost);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();
    let imgUrl = "";
    if (file) imgUrl = await upload();
    mutation.mutate({ desc, img: imgUrl });
    setDesc("");
    setFile(null);
  };

  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <div className="left">
            {/* <img src={"/upload/" + currentUser.profilePic} alt="" /> */}
            <img src='https://cdn2.iconfinder.com/data/icons/animals-nature-2/50/1F428-koala-512.png' alt='koala' />
            <input
              type="text"
              placeholder={`What's on your mind ${currentUser.name}?`}
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
            />
          </div>
          <div className="right">
            {file && (
              <img className="file" alt="" src={URL.createObjectURL(file)} />
            )}
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>
          </div>
          <div className="right">
            <button onClick={handleClick}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;