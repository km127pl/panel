import {Menu} from "../components/Menu.tsx";
import '../assets/serverlist.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faServer} from "@fortawesome/free-solid-svg-icons";

interface Server {
	name: string;
	description: string;
	icon: string;
	uuid?: string;
	status?: string;
}

interface ServerListProps {
	servers: Server[];
}

export const ServerList = ({servers}: ServerListProps) => {
	return (
		<>
			<Menu current={"/"} />
			<div className="server-list">
				{servers.map((server, index) => (
					<a className="server-link" href={`/server/console/${server.uuid}`}>
						<div className="server" key={index}>
							<FontAwesomeIcon icon={faServer} className="icon" />
							<div className="server-info">
								<h2>{server.name}</h2>
								<p>{server.description}</p>
								<p className="status">{server.status}</p>
							</div>
						</div>
					</a>
				))}
			</div>
		</>
	)
}