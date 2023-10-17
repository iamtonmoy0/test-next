import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

const layout = ({children}) => {
	return (
		<div>
			    {/* header */}
      <Navbar/>

        {children}
       {/* footer */}
   
      <Footer/>
		</div>
	);
};

export default layout;