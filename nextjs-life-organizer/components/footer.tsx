type FooterProps = {
    authorName: string;
    copyrightYear: number;
};

export default function Footer({authorName, copyrightYear}: FooterProps) {
    return (
        <footer>
            &copy; {copyrightYear} {authorName}
        </footer>
    );
}

