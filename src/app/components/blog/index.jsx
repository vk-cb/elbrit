import React from 'react'
import BlogCard from '../ui/BlogCard'
import { blogData } from '@/app/utility/constants'

const Blog = () => {
  return (
    <div className='sm:px-40 px-8 sm:py-16 border'>
        <p className='uppercase text-featureBackground text-sm font-semibold text-center pt-10'>Our Blog</p>
        <p className='text-textPrimary text-3xl font-bold text-center tracking-wider pb-10 pt-6'>Latest News</p>
        <div className='flex sm:justify-between px-4 sm:px-0 justify-center flex-col sm:flex-row'>
          {blogData.map((d,i)=>(
        <BlogCard key={i+"blogData"} date1={d.date1} date2={d.date2} index={i}/>
      ))}
        </div>
    </div>
  )
}

export default Blog