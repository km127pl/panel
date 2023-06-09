import { ControlPanel } from "../components/ControlPanel";
import { Menu } from "../components/Menu"
import { ServerContainer } from "../components/ServerContainer";

import '../assets/console.scss';

export const Console = () => {
	return (
		<>
			<Menu current={"/server/console"} />
			<div className="dashboard">
				<ServerContainer name={"Dev Server"} owner={"km127pl"} description={"A development server"} ip={"localhost"} port={25565} uuid={"edfd9d81-d297-476e-a614-12735017ff5f"} />
				<ControlPanel />
			</div>
		</>
	)
}