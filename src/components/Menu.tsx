import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/menu.scss';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHome, faShieldHalved, faUser, faKey, faRightFromBracket, faLocationArrow, faPlay, faTerminal, faFile, faDatabase, faWifi } from '@fortawesome/free-solid-svg-icons';

interface MenuItems {
	[key: string]: {
		items: {
			text: string,
			icon: IconDefinition,
			link: string,
			highlight?: boolean
		}[]
	}
}

interface MenuProps {
	current: string // link
}

export const Menu = ({ current }: MenuProps) => {
	const items: MenuItems = {
		"Dashboard": {
			"items": [
				{
					"icon": faHome,
					"link": "/",
					"text": "Servers",
					"highlight": true
				}
			]
		},
		"Server Settings": {
			"items": [
				{
					"text": "Console",
					"icon": faTerminal,
					"link": "/server/console"
				},
				{
					"text": "Files",
					"icon": faFile,
					"link": "/server/files"
				},
				{
					"text": "Allocations",
					"icon": faLocationArrow,
					"link": "/server/general"
				},
				{
					"text": "Databases",
					"icon": faDatabase,
					"link": "/server/databases"
				},
				{
					"text": "Network",
					"icon": faWifi,
					"link": "/server/network"
				},
				{
					"text": "Startup",
					"icon": faPlay,
					"link": "/server/startup"
				},
			]
		},
		"User settings": {
			"items": [
				{
					"text": "Admin",
					"icon": faShieldHalved,
					"link": "/admin"
				},
				{
					"text": "Accounts",
					"icon": faUser,
					"link": "/accounts"
				},
				{
					"text": "Keys",
					"icon": faKey,
					"link": "/accounts/keys"
				}
			]
		},
	}
	return (
		<div className="menu">
			<div className="menu-header">DASHBOARD</div>
			<nav>
				<ul>
					{Object.keys(items).map((key: string) => {
						return (
							<li key={key}>
								{/* <span className="menu-category">{key}</span> */}
								<hr />
								<ul>
									{items[key].items.map((item) => {
										return (
											<li key={item.text} className={item.highlight ? "menu-item highlight" : "menu-item"}>
												<FontAwesomeIcon icon={item.icon} className={current === item.link ? "menu-item-icon current" : "menu-item-icon"} />
												<a href={item.link} className={current === item.link ? "menu-item-link current" : "menu-item-link"}>{item.text}</a>
											</li>
										)
									})}
								</ul>
							</li>
						)
					})}
					{/* logout */}
					<li className="menu-item menu-bottom">
						<FontAwesomeIcon icon={faRightFromBracket} className="menu-logout-icon" />
						<a href="/logout" className="menu-logout">
							Logout
						</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}