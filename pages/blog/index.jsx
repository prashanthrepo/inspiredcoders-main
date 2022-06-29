import React from 'react';
import Newsletter from '../../components/Newsletter';
import PageIllustration from '../../components/PageIllustration';
import BlogList from '../../components/BlogList';
function Blog() {
  return (
    <main className="grow">
      <div
        className="relative max-w-6xl mx-auto h-0 pointer-events-none"
        aria-hidden="true">
        <PageIllustration />
      </div>
      <BlogList />
      <Newsletter />
    </main>
  );
}
Blog.title = 'Blog';
export default Blog;
