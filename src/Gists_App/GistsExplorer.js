import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from './redux/createStore';
import FilesList from "./components/FilesList";
import Gist from "./components/Gist";
import { Container } from 'semantic-ui-react';
import OwnerInfo from './components/OwnerInfo'

const store = createStore();

function GistsExplorer() {
	return (
		<Provider store={store}>
			<Router>
				<Container style={{marginLeft: 'auto', marginRight: 'auto', display: 'flex', width: 1500, height: '250vh', backgroundColor: '#f5f2f0', justifyContent: 'space-between'}}>
					<FilesList />
					<Switch>
						<Route path='/gist'>
							<Gist />
						</Route>
						<Route path='/owner'>
							<OwnerInfo />
						</Route>
					</Switch>
				</Container>
			</Router>
		</Provider>
	)
}

export default GistsExplorer;