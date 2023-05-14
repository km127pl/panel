import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/controlpanel.scss';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { InfoModule } from './InfoModule';

export interface ControlPanelProps {
	uuid: string,
	name: string,
	owner: string,
	buttons: {
		start: boolean,
		stop: boolean,
		restart: boolean
	},
	description: string,
	ip: string,
	port: number
}

export const ControlPanel = () => {

	return (
		<div className="control-panel">
			<div className="header">
				<div className="title">Manage</div>
				<div className="subtitle">Restarting
					{/* online icon fa */}
					<FontAwesomeIcon icon={faCircle} />
				</div>
			</div>
			<div className="manage">
				<div className="control-buttons">
					<button disabled>START</button>
					<button>STOP</button>
					<button>RESTART</button>
				</div>

				<InfoModule type={"Address"} value={"localhost:25565"} icon={faCircle} />
				<InfoModule type={"Uptime"} value={"300 days"} icon={faCircle} />
				<InfoModule type={"CPU"} value={"999%"} icon={faCircle} />
				<InfoModule type={"RAM"} value={"1024/4096MiB"} icon={faCircle} />
				<InfoModule type={"Disk"} value={"8.2TiB/16TiB"} icon={faCircle} />
				<InfoModule type={"Some other stat"} value={"idk im not creative"} icon={faCircle} />
			</div>

		</div>
	)
}