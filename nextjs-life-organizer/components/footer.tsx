type FooterProps = {
    authorName: string;
};

export default function Footer({authorName}: FooterProps) {
    return (
        <footer>
            &copy; 2026 {authorName}
        </footer>
    );
}

