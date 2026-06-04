import link from "nexr/link";

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/jogos">Jogos</Link></li>
                    <li><Link href="/sobre">Sobre</Link></li>
                    <li><Link href="/contato">Contato</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;