import React from 'react'
import './Navbar.css'

function Navbar() {
  return(
    <header>
      <div class="container-fluid px-0" id="header" >
			<nav class="navbar navbar-expand-lg navbar-light px-0">
				<a class="navbar-brand ml-3" href="index.html">
	              <img src="media/heartlogo.svg" width="40" alt="Home Logo"/>
	          	</a>
	          	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	    			<span class="navbar-toggler-icon"></span>
	  			</button>
		  		<div class="collapse navbar-collapse" id="navbarSupportedContent">
		    		<ul class="navbar-nav">
		      			<li class="nav-item">
		        			<a class="nav-link" href="index.html">Home</a>
		      			</li>
		      			<li class="nav-item">
				        	<a class="nav-link" href="index.html">Get Involved</a>
				      	</li>
				      	<li class="nav-item">
				        	<a class="nav-link" href="index.html">News</a>
				      	</li>
				      	<li class="nav-item">
				        	<a class="nav-link" href="index.html">Who We Are</a>
				      	</li>
				      	<li class="nav-item">
				        	<a class="nav-link" href="index.html">Contact Us</a>
				      	</li>
						<li class="nav-item">
				        	<a class="nav-link" href="index.html">Shop</a>
				      	</li>
		    		</ul>
				</div>
			</nav>
		</div>
    </header>
    )
};

export default Navbar;