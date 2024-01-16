import { postsData } from "../fakeData";
import Post from "./Post";

const Posts = () => {
  return (
    <main className="d-flex flex-column gap-4 ">
      {postsData?.length > 0 &&
        postsData.map((post) => <Post key={post.id} postData={post} />)}
    </main>
  );
};

export default Posts;
