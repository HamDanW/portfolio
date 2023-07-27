import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import MarkDown from 'markdown-to-jsx';

import Layout from "../../components/layout";
import Seo from "../../components/seo";

const SimpleShell = () => {
  const file_name= 'simple-shell.md';
  const [post, setPost] = useState('');

  useEffect(()=>{
    import(`./${file_name}`)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  });

  return (
    <Layout>
      <MarkDown>
        {post}
      </MarkDown>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export const Head = () => <Seo title="Simple-Shell" />

export default SimpleShell
