import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = ({ pageContext }) => {
  const { page } = pageContext as { page: { title: string } };

  return (
    <>
      <h1>{page.title}</h1>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
