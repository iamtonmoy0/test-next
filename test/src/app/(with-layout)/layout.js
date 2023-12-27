import React from 'react';

const Layout = ({children}) => {
	return (
		<div>
			<nav className="text-center flex justify-between">
          <a>Home</a>
          <a>About</a>
          <a>Contact</a>
        </nav>
        {children}
        <footer className="text-center">hello world this is footer</footer>
		</div>
	);
}

export default Layout;
