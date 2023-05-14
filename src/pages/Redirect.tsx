// @flow
import * as React from 'react';

type Props = {
	to: string
};

export class Redirect extends React.Component<Props> {
	render() {
		return (
			<div>
				Redirecting to {this.props.to}
				{
					document.location.href = this.props.to
				}
			</div>
		);
	}
}