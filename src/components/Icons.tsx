import {
	CiSettings,
	CiMail,
	CiLogin,
	CiLogout,
	CiUser,
	CiTimer,
	CiBellOn,
	CiBellOff,
	CiHome,
	CiDark,
} from "react-icons/ci";

type IconType = React.FC<{ size?: number; color?: string }>;

type IconName = "settings" | "mail" | "login" | "logout" | "user" | "timer" | "bell-on" | "bell-off" | "home" | "dark";

const iconComponents: { [key in IconName]: IconType } = {
	settings: CiSettings,
	mail: CiMail,
	login: CiLogin,
	logout: CiLogout,
	user: CiUser,
	timer: CiTimer,
	"bell-on": CiBellOn,
	"bell-off": CiBellOff,
	dark: CiDark,
	home: CiHome,
};

export const Icon: React.FC<{ name: IconName; size?: number; color?: string }> = ({ name, size, color }) => {
	const IconComponent = iconComponents[name];
	return <IconComponent size={size} color={color} />;
};
