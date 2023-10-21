import React from 'react';

const BlogPage =async () => {
const data = await fetch('https://jsonplaceholder.typicode.com/posts',{
	cache:"force-cache"
})
const res =await data.json()

	return (
		<div>
			this is blog page
			{res.map(data=>
			<ul className='text-center' key={data._id}>
				<li className='text-xl'>
					{data.title}
				</li>
			</ul>
			)}
			
		</div>
	);
};

export default BlogPage;