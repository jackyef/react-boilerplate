import React, { useContext, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { GlobalContext } from '../../context/global';
import getGraphqlQuery from '../../queries/pokemons.graphql';

import homeImage from './assets/home-icon.svg';

import { HomeContainer } from './styles';

const Home = () => {
  const [globalState, globalDispatch] = useContext(GlobalContext);
	const { count } = globalState;

  const { loading, data } = useQuery(getGraphqlQuery, {
    variables: {
			"limit": 2,
			"offset": 1
		},
	});

  const incrementCounter = useCallback(() => {
    globalDispatch({ type: 'INCREMENT_COUNTER' });
  }, [globalDispatch]);

  return (
    <HomeContainer>
      <div>
        This is Home.js
        <img src={homeImage} />
        <div>
          <Link to={'/about'}>Go to about</Link>
        </div>
        { !loading && data && (
        <div>
          {
							data.pokemons.results.map((i) => <div key={i.name}>{i.name}</div>)
						}
        </div>
				)}
        <br />
        Current counter value: {count}
        <br />
        <button type="button" onClick={incrementCounter}>
          Click me to increase counter by 1
        </button>
      </div>
    </HomeContainer>
  );
};

export default Home;
