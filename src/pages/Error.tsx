// @flow
import * as React from 'react';
import '../assets/error.scss';

type Props = {
	title: string,
	code: number,
	message: string
};

export class Error extends React.Component<Props> {
	render() {
		return (
			<div className="error-container">
				<h2><code>{this.props.code}</code></h2>
				<p>{this.props.message}</p>
				<a href="/">Go back to the dashboard</a>
			</div>
		);
	}
}