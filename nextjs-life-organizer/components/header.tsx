import NavBar from './NavBar';
import { NavItem } from './NavBar';

const navigationLinks: NavItem[] = [
  { label: 'Home', href: '/' },
  //{ label: 'About', href: '/about' },
];

type HeaderProps = {
    pageTitle: string;
};

export default function Header({pageTitle}: HeaderProps) {
    return (
        <header>
            <NavBar websiteName={pageTitle} links={navigationLinks} />
        </header>
    );
}

