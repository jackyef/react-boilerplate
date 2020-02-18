import React from 'react';
import { Link } from 'react-router-dom';
import { AboutContainer, WrapperFull, Cover, Content, LinkWrapper } from './styles';

const About = () => {
	return (
		<AboutContainer>
			<WrapperFull>
				<Cover>
					<Content>
						<h1>React Boilerplate</h1>
						<p>An opinionated react boilerplate created for personal learning</p>
						<LinkWrapper>
							<Link to={'/'}>Go to home</Link>
						</LinkWrapper>
					</Content>
				</Cover>
			</WrapperFull>
		</AboutContainer>
	);
};

export default About;
