import React from 'react';
import ReactDOM from 'react-dom';

class Foobar extends React.Component {
	render() {
		return (
			<div>
				<p>{this.props.text}</p>
			</div>		
		);
	}
}

ReactDOM.render(<Foobar text="Hello from Foobar" />, document.getElementById('app') );