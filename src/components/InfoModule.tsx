import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../assets/infomodule.scss';

interface InfoModuleProps {
	type: string,
	value: string,
	icon: IconDefinition
}

export const InfoModule = (props: InfoModuleProps) => {
	return (
		<div className="info-module">
			<div className="icon">
				<span className="icon">
					<FontAwesomeIcon icon={props.icon} />
				</span>
			</div>
			<div className="info">
				<div className="type" style={{
					cursor: "default",
					userSelect: "none"
				}}>{props.type}</div>
				<div className="value">{props.value}</div>
			</div>
		</div>
	)
}