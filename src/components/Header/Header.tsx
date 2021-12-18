import './Header.scss';
import '../../styles/globals.scss'
import PageSwitch from '../PageSwitch/PageSwitch';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';

interface HeaderProps {
	user?: {};
	onLogin: () => void;
	onLogout: () => void;
	onCreateAccount: () => void;
  }

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
	<nav className="Header">
		<div className="container container--large">
			<LanguageSwitch />

			<p>Camilla Ferreri</p>

			<PageSwitch />
		</div>
	</nav>
)

export default Header;