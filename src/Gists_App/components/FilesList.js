import React, { useEffect } from 'react';
import { List, Icon } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiData } from '../redux/actions';
import { NavLink, Switch, Route } from 'react-router-dom';
import { fetchGist, fetchOwner } from '../redux/actions';
import { detectLanguage } from '../redux/actions';
import { detectUrl } from '../redux/actions';
import OwnerInfo from './OwnerInfo'

function FilesList() {

const dispatch = useDispatch();
const data = useSelector(state => state.data)
const gists = useSelector(state => state.selectedGists)

useEffect(() => {
	dispatch(fetchApiData());
}, []);
	
	return (
		<List style={{position: 'absolute', left: 10, top: 75, width: 500, overflowWrap: 'break-word', backgroundColor: '#e9e7e2', paddingLeft: 10}}>
			{data.list.map(file =>
			<List.Item style ={{marginTop: 10}}>
				<Icon name='github' size='large' verticalAlign='middle' />
				<List.Content style ={{textAlign: 'left'}}>
					<NavLink to={'/gist'} onClick={() =>
					    {gists.list.every(gistItem => gistItem.url !== file.raw_url) && dispatch(fetchGist(file.raw_url))
							dispatch(detectUrl(file.raw_url));
							dispatch(detectLanguage(file.language))}}>
						<List.Header style ={{fontSize: 18, color:'black', marginTop: 10}}>{file.filename}</List.Header>
					</NavLink>
					<List.Description style ={{color: 'grey', marginTop: 5}}>Size: {file.size}</List.Description>
					<NavLink to={'/owner'} style ={{marginTop: 5, color: 'blue'}} onClick={() =>
					{dispatch(fetchOwner(file.filename))}}>More info</NavLink>
				</List.Content>
			</List.Item> 
			)}
			{/* <Switch>
				<Route path='/owner'>
					<OwnerInfo />
				</Route>
			</Switch> */}
		</List>
	)
}

export default FilesList;