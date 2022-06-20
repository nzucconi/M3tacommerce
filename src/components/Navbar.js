import React from 'react'
import './Navbar.css'

function Navbar() {
  return(
    <header>
      <div className="container-fluid px-0" id="header" >
			<nav className="navbar navbar-expand-lg navbar-light px-0">
				<a className="navbar-brand ml-3" href="index.html">
	              <img src="media/heartlogo.svg" width="40" alt="Home Logo"/>
	          	</a>
	          	<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	    			<span className="navbar-toggler-icon"></span>
	  			</button>
		  		<div className="collapse navbar-collapse" id="navbarSupportedContent">
		    		<ul className="navbar-nav">
		      			<li className="nav-item">
		        			<a className="nav-link" href="index.html">Home</a>
		      			</li>
		      			<li className="nav-item">
				        	<a className="nav-link" href="index.html">Get Involved</a>
				      	</li>
				      	<li className="nav-item">
				        	<a className="nav-link" href="index.html">News</a>
				      	</li>
				      	<li className="nav-item">
				        	<a className="nav-link" href="index.html">Who We Are</a>
				      	</li>
				      	<li className="nav-item">
				        	<a className="nav-link" href="index.html">Contact Us</a>
				      	</li>
						<li className="nav-item">
				        	<a className="nav-link" href="index.html">Shop</a>
				      	</li>
		    		</ul>
				</div>
			</nav>
		</div>
    </header>
    )
};

export default Navbar;