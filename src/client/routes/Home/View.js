import React, { useContext, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { GlobalContext } from '../../context/global';
import getGraphqlQuery from '../../queries/pokemons.graphql';

import { HomeContainer, WrapperFull, Cover, Content, LinkWrapper, ListWrapper, IncrementWrapper } from './styles';

const Home = () => {
	const [globalState, globalDispatch] = useContext(GlobalContext);
	const { count } = globalState;

	const { loading, data } = useQuery(getGraphqlQuery, {
		fetchPolicy: 'cache-first',
		variables: {
			limit: 2,
			offset: 1
		},
	});

	const incrementCounter = useCallback(() => {
		globalDispatch({ type: 'INCREMENT_COUNTER' });
	}, [globalDispatch]);

	return (
		<HomeContainer>
			<WrapperFull>
				<Cover>
					<Content>
						<h1>React Boilerplate</h1>
						<p>An opinionated react boilerplate created for personal learning</p>
						<LinkWrapper>
							<Link to={'/about'}>Go to about</Link>
						</LinkWrapper>

						{!loading && data && (
							<ListWrapper>
								{
									data.pokemons.results.map((i) => <a key={i.name}>{i.name}</a>)
								}
							</ListWrapper>
						)}

						<IncrementWrapper>
							<p>Current counter value: {count}</p>
							<button type="button" onClick={incrementCounter}>
								Click me to increase counter by 1
							</button>
						</IncrementWrapper>
					</Content>
				</Cover>
			</WrapperFull>
		</HomeContainer>
	);
};

export default Home;
