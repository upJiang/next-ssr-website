export default function ({ post }: { post: string }) {
  return (
    <div>
      <h1>Post: {post}</h1>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = new Array(10).fill(0).map((_, i) => ({
    params: { id: i + 1 + "" },
  }));

  console.log("paths", paths);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  console.log("params", params);
  return { props: { post: `post ${params.id}` } };
}
