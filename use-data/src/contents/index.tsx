import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import type { IPost } from "@/types/Ipost";

const IndexPage: React.FC<PageProps> = ({ pageContext }) => {
  // console.log(pageContext.page);
  const { page } = pageContext as IPost;

  return (
    <>
      <h1>{page.title}</h1>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
