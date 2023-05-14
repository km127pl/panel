import { LogsRenderer } from './LogsRenderer';
import './servercontainer.scss';

interface ServerContainerProps {
	uuid: string,
	name: string,
	owner: string,
	description: string,
	ip: string,
	port: number
}

/**
 * This component is the container for the server console.
 */
export const ServerContainer = (props?: ServerContainerProps) => {
	return (
		<div className="server-container">
			<div className="header">
				<div className="title">Dashboard</div>
				<div className="subtitle">{props?.name}</div>
			</div>
			<div className="console">
				<div className="logs">
					<LogsRenderer />
				</div>
				<div className="console-input">
					<span id="prefix" style={{
						userSelect: "none",
					}}>»</span>
					<input type="text" placeholder='Type your command here...' />
					<button>Send</button>
				</div>
			</div>

		</div >
	)
};