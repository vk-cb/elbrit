import React from 'react'
import BlogCard from '../ui/BlogCard'
import { blogData } from '@/app/utility/constants'

const Blog = () => {
  return (
    <div className='px-40 py-16'>
        <p className='uppercase text-featureBackground text-sm font-semibold text-center pt-10'>Our Blog</p>
        <p className='text-textPrimary text-3xl font-bold text-center tracking-wider pb-10 pt-6'>Latest News</p>
        <div className='flex justify-between'>
          {blogData.map((d,i)=>(
        <BlogCard key={i+"blogData"} date1={d.date1} date2={d.date2} index={i}/>
      ))}
        </div>
    </div>
  )
}

export default Blog