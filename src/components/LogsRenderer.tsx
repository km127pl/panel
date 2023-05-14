import { useState, useEffect } from "react";
import '../assets/logs.scss';
import logs from '../assets/logs.json' assert {
	"type": "json"
}

interface LogRecord {
	timestamp?: number,
	prefix: "INFO" | "WARN" | "ERROR" | "DAEMON" | string;
	message: string
}

interface Prefix {
	color: string,
	foreground: string,
	margin: string
}

const Prefixes = {
	"INFO": {
		color: "#447EFF",
		foreground: "$fg",
		margin: "0.6rem"
	},
	"WARN": {
		color: "#f0ac00",
		foreground: "#f0ac00",
		margin: "0.7rem"
	},
	"ERROR": {
		color: "#fd4a4a",
		foreground: "#fd4a4a",
		margin: "0rem"
	},
	"DAEMON": {
		color: "#e07534",
		foreground: "#e07534",
		margin: "-0.6rem"
	}
} as { [key: string]: Prefix };

export const LogsRenderer = () => {
	const [_logs, setLogs] = useState<LogRecord[]>([]);

	useEffect(() => {
		// // add 1000 logs
		// for (let i = 0; i < 10; i++) {
		// 	setLogs((logs) => [...logs, {
		// 		timestamp: Date.now(),
		// 		prefix: "INFO",
		// 		message: "This is a test message"
		// 	}]);
		// }
		// add all logs from logs.json
		const __logs: LogRecord[] = logs;
		setLogs(__logs);
	}, [_logs]);

	return (
		<div className="logs">
			{logs.map((log: LogRecord, index: number) => {
				return (
					<div key={index} className="log">
						<div className="timestamp">{new Date(log.timestamp!).toLocaleTimeString()}</div>
						<div className="prefix" style={{ color: Prefixes[log.prefix].color, marginRight: log.prefix === "ERROR" ? "0rem" : Prefixes[log.prefix].margin }}>{log.prefix}</div>
						<div className="message" style={{ color: Prefixes[log.prefix].foreground }}>{log.message}</div>
					</div>
				)
			}
			)}
		</div>
	)
}
