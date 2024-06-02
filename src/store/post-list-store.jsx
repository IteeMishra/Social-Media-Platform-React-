import { createContext, useReducer } from "react";

//creating context with initial values

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

//reducer function
const postListReducer = (currPostList, action) => {

  let newPostList = currPostList;
  if (action.type === "DEL_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  else if(action.type==="ADD_POST"){
      newPostList=[action.payload,...currPostList];
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (postTitle, postUserId, postBody, postReaction, postTags) => {
    // console.log(postTitle+  postUserId + postBody+ postReaction+ postTags);
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        //kabhi bhi time dubara laut k nhi aata isliye for 2 post nhi hoga same id
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: postReaction,
        userId: postUserId,
        tags: postTags,
      },
    });
  };

  const deletePost = (postId) => {
    console.log(postId);
    dispatchPostList({
      type: "DEL_POST",
      payload: {
        postId: postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{ postList: postList, addPost: addPost, deletePost: deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi, I am going to mumbai, Peace Out!",
    reactions: 2,
    userId: "user-9",
    tags: ["#vacation", "#mumbai"],
  },
  
];

export default PostListProvider;
