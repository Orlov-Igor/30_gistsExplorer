import React, { useEffect } from 'react';
import { List, Icon, Header } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiData } from '../redux/actions';
import { NavLink } from 'react-router-dom';
import { fetchGist, fetchOwner } from '../redux/actions';
import { detectLanguage } from '../redux/actions';
import { detectUrl } from '../redux/actions';


function FilesList() {

const dispatch = useDispatch();
const data = useSelector(state => state.data)
const gists = useSelector(state => state.selectedGists)

useEffect(() => {
	dispatch(fetchApiData());
}, []);
	
	return (
		<div style={{width: 520, marginTop: 20, textAlign: 'center'}}>
		<Header style={{fontSize: 22, color: '#4f4b49', fontWeight: 500, textDecoration: 'underline'}}>Files list</Header>
		<List style={{overflowWrap: 'break-word', backgroundColor: '#e9e7e2', padding: 10, marginLeft: 15, marginTop: 30, borderRadius: 15}}>
			{data.list.map(file =>
			<List.Item style ={{marginTop: 10}}>
				<List.Content style ={{textAlign: 'left'}} id='listitem-content'>
					<NavLink to={'/gist'} onClick={() =>
					    {gists.list.every(gistItem => gistItem.url !== file.raw_url) && dispatch(fetchGist(file.raw_url))
							dispatch(detectUrl(file.raw_url));
							dispatch(detectLanguage(file.language))}}>
						<List.Header style ={{fontSize: 18, color:'black', marginTop: 10, backgroundColor: '#fffaf7', lineHeight: 2, paddingLeft: 5}}>{file.filename}</List.Header>
					</NavLink>
					<List.Description style ={{color: 'grey', marginTop: 5}}>Size: {file.size}</List.Description>
					<NavLink to={'/owner'} style ={{marginTop: 5, color: 'grey'}} onClick={() =>
					{dispatch(fetchOwner(file.filename))}}>
						Show info
					</NavLink>
				</List.Content>
			</List.Item> 
			)}
		</List></div>
		
	)
}

export default FilesList;