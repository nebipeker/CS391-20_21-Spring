import React from 'react';
import Heading from '../../components/Heading'
import './about.css'
export default class About extends React.Component {
	render() {
		return (
            <div className="Appx">
			<Heading title="About" />
			<p id="aligned">In this project, we try to create a website which would let its 
                            users to browse through usernames which belong to some of the most 
							well-known social media networks such as Facebook, Instagram, Twitter etc. 
							After selecting a username and the social media, the website displays the users comments on the chosen username.
							 For example if someone searches for the username @rickygervais on Twitter, which belongs to the famous English comedian Ricky Gervais, there may be some comments such as: "This user always tweets funny content." This may seem unnecessary when we apply this concept to very well-known people like Ricky Gervais, however, let's say that someone has followed our account and tries to communicate with us via Direct Message on Instagram. Their account is private which means that we can't see their content. In such case, we would use this website to understand who the account belongs to and if the account owner is a trustworthy person. This is, of course, is not the sole purpose but only an example use case.

            </p>
		  </div>
	



		);
	  }
}