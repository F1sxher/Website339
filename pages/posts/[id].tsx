import { getAllPostIds, getPostData } from "../../scripts/posts";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <div className="flex justify-center items-center w-screen vh-default-main">
        <h1 className="text-5xl font-bold">{postData.title}</h1>
        <span>
            {postData.date}
        </span>
        <span className="text-hxl" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  );
}