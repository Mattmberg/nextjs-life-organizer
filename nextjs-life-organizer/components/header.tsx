type HeaderProps = {
    pageTitle: string;
};

export default function Header({pageTitle}: HeaderProps) {
    return (
        <header>
            <h1>Welcome to your Life Organizer!</h1>
        </header>
    );
}

