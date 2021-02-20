import React from 'react';
import { Card } from 'semantic-ui-react';
import { useSelector } from 'react-redux';

function OwnerInfo() {

	const owner = useSelector(state => state.owner);


	return(
		<Card style={{width: 950, height: 250, marginRight: 15, marginTop: 20}}>
			<Card.Header style={{fontSize: 22, marginBottom: 30, color: '#4f4b49', fontWeight: 500, textDecoration: 'underline'}}>User information</Card.Header>
			<Card.Content style={{backgroundColor: '#7d6f65', color: 'white',borderRadius: 15}}>
				<Card.Meta style={{padding: 10, textAlign: 'left', textDecoration: 'underline', fontSize: 18}}>
				Login: {owner.ownerInfo === undefined?null:owner.ownerInfo.owner.login}
				</Card.Meta>
				<Card.Description style={{padding: 10, textAlign: 'left'}}>
				User id: {owner.ownerInfo === undefined?null:owner.ownerInfo.owner.id} <br /><br />
				Type: {owner.ownerInfo === undefined?null:owner.ownerInfo.owner.type} <br /><br />
				Followers: 
				<a href={owner.ownerInfo === undefined?null:owner.ownerInfo.owner.followers_url} style={{color: 'black', cursor: 'pointer'}}> open link
				</a> <br /><br />
				Subscriptions:
				 <a href={owner.ownerInfo === undefined?null:owner.ownerInfo.owner.subscriptions_url} style={{color: 'black', cursor: 'pointer'}}> open link
				</a> <br /><br />
				Organizations:
				 <a href={owner.ownerInfo === undefined?null:owner.ownerInfo.owner.organizations_url} style={{color: 'black', cursor: 'pointer'}}> open link
				</a> 
				</Card.Description>
			</Card.Content>
		</Card> 
	)
}

export default OwnerInfo;

