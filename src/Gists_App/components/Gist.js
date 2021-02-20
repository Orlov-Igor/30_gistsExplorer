import React from 'react';
import { Card } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { agate } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function Gist() {

	const gist = useSelector(state => state.selectedGists);
	const language = useSelector(state => state.language);
	const url = useSelector(state => state.url)

    function showGist(url, gist) {
		let storedGist = gist.list.find(item => item.url === url);
		return storedGist?storedGist.text:gist.list[gist.list.length-1].text	    							
	}

	return(
		<Card style={{ width: 950, marginRight: 15, marginTop: 20, borderRadius: 15 }}>
			<Card.Content>
				<Card.Header style={{fontSize: 22, color: '#4f4b49', fontWeight: 500, textDecoration: 'underline'}}>Gist code</Card.Header>
				<Card.Meta>
					Language: {language}
				</Card.Meta>
				<Card.Description style={{textAlign: 'left'}}>
					<SyntaxHighlighter language={language} style={agate}> 
						{gist.list.length === 0?'<=== Choose a file from the list':showGist(url, gist)}
					</SyntaxHighlighter>
				</Card.Description>
			</Card.Content>
		</Card> 
	)
}

export default Gist;

 

