import NavBar from './NavBar';
import { NavItem } from './NavBar';

const navigationLinks: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Login', href: '/login' },
];

type HeaderProps = {
    siteTitle: string;
};

export default function Header({ siteTitle}: HeaderProps) {
    return (
        <header>
            <NavBar websiteName={siteTitle} links={navigationLinks} />
        </header>
    );
}

