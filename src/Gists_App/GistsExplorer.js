import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from './redux/createStore';
import FilesList from "./components/FilesList";
import Gist from "./components/Gist";
import { Container } from 'semantic-ui-react';

const store = createStore();

function GistsExplorer() {
	return (
		<Provider store={store}>
			<Router>
				<Container style={{marginLeft: 'auto', marginRight: 'auto', position: 'relative', display: 'flex', width: 1500}}>
					<FilesList />
					<Switch>
						<Route path='/gist'>
							<Gist />
						</Route>
					</Switch>
				</Container>
			</Router>
		</Provider>
	)
}

export default GistsExplorer;