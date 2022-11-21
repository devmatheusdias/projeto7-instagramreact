export default function Links() {

    const links = [
        "Sobre • ", "Ajuda • ", "Imprensa • ", "API • ", "Carrerias • ", "Privacidade • ", "Termos • ", "Localizações • ", "Contas • ", "Hashtags • ", "Idioma"
    ]

    return (
        <>
            <div className="links">
                {links.map((link) => `${link}`)}
            </div>
            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </>
    )
}


