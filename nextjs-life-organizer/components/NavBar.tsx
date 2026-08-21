export interface NavItem {
    label: string;
    href: string;
    isExternal?: boolean;
}

interface NavBarProps {
    websiteName: string;
    links: NavItem[];
};

export default function NavBar({websiteName, links}: NavBarProps) {
    return (
        <nav className="navGroup">
          <div className="websiteIcon">
            <a href="/" className="">
              {websiteName}
            </a>
          </div>

          <div className="linksGroup">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.isExternal ? '_blank' : '_self'}
                rel={link.isExternal ? 'noopener noreferrer' : undefined}
                className=""
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
    );
}