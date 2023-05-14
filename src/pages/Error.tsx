// @flow
import * as React from 'react';

type Props = {
	title: string,
	code: number,
	message: string
};

export class Error extends React.Component<Props> {
	render() {
		return (
			<div className="error-container">
				<h2>{this.props.code}</h2>
				<p>{this.props.message}</p>
			</div>
		);
	}
}