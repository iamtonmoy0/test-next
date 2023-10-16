import React from 'react';

const SingleBlogPage = ({params}) => {
	const [year,id]=params.segments;
	return (
		<div>
			single blog page.{year}-{id}
		</div>
	);
};

export default SingleBlogPage;