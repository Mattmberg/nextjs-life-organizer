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
            <h1>Welcome to your Life Organizer!</h1>

            <NavBar websiteName="Life Organizer" links={navigationLinks} />
        </header>
    );
}

