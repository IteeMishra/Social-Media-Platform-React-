import { useContext } from "react";
import { useRef } from "react";
//hum isse { } me isliye import kar rahe kyuki yeh default export nhi tha balki yeh
//normal se export hua hai context name
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const userIdElement = useRef();
  const bodyElement = useRef();
  const titleElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  //basically humne apne context se addPost fn ko yaha available kara liya ki hum usse call kae paye

  const { addPost } = useContext(PostList);

  const handleSubmit = (event) => {
    //this event.preventdefault stops the form from sending data on submitting of the form directly
    //to the server instead we get access and now humpe hai ki yeh data hum kaha bhejte hai
    
    event.preventDefault();
    const postTitle = titleElement.current.value;
    const postUserId = userIdElement.current.value;
    const postBody = bodyElement.current.value;
    const postReaction = reactionsElement.current.value;
    //splitting string into array by spaace
    const postTags = tagsElement.current.value.split(' ');


    // jab humne ek baar values le li toh phir hum chahte hai ki form clean ho jaye taaki hum samajh jaaye post add ho gayi hai aur hum dusri post
    //create kar paaye aur isliye hum unki values ko "" set kar denge after data extraction

    titleElement.current.value="";
    userIdElement.current.value="";
    bodyElement.current.value="";
    reactionsElement.current.value="";
    reactionsElement.current.value="";
    tagsElement.current.value="";

    //aur humne saari values ko addPost wale function me bhje denge
    addPost(postTitle, postUserId, postBody, postReaction, postTags);
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          ref={titleElement}
          placeholder="Give Title to your post here!"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          className="form-control"
          id="body"
          rows="5"
          ref={bodyElement}
          placeholder="Post what you fell."
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter Your User ID
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          rows="5"
          ref={userIdElement}
          placeholder="Enter your userID"
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          How Many people reacted To This Post
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          rows="5"
          ref={reactionsElement}
          placeholder="Reactions in number"
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter Tags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          rows="5"
          ref={tagsElement}
          placeholder="Enter Tags using Space"
        ></input>
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default CreatePost;
