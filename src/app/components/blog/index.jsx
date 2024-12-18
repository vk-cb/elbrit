import React from 'react'
import BlogCard from '../ui/BlogCard'

const Blog = () => {
  return (
    <div className='px-40 py-16'>
        <p className='uppercase text-featureBackground text-sm font-semibold text-center pt-10'>Our Blog</p>
        <p className='text-textPrimary text-3xl font-bold text-center tracking-wider pb-10 pt-6'>Latest News</p>
        <div className='flex justify-between'>

        <BlogCard index={0}/>
        <BlogCard index={1}/>
        <BlogCard index={2}/>
        <BlogCard index={3}/>
        </div>
    </div>
  )
}

export default Blog